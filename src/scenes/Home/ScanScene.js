import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  Alert,
  Modal,
  Dimensions,
  ActivityIndicator,
  View,
  ToastAndroid,
} from 'react-native';

import {requestCreateTable} from '../../utils/api';
import {GlobalContext} from '../../context/GlobalState';

import {GRAY, PRIMARY} from '../../constants/colors';

import QRPlaceholder from '../../components/Scan/QRPlaceholder';
import CameraBackground from '../../components/Scan/CameraBackground';
import ScanFooter from '../../components/Scan/ScanFooter';
import ScanHeader from '../../components/Scan/ScanHeader';
import GreetUser from '../../components/Scan/GreetUser';
import TableIDInput from '../../components/Scan/TableIDInput';
import {SceneLoader} from '../../components/Shared';
import {TABLE_ID_LENGTH} from '../../constants/config';
import {REGEX, SCAN} from '../../constants/strings';

const {width, height} = Dimensions.get('screen');

const ScanScene = ({navigation}) => {
  // user info
  const {user, email} = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setImage(user.image);
    }
  }, [user]);
  //

  // scanning state
  const [navigating, setNavigating] = useState(false);
  const [isDim, setIsDim] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const navigationListener = navigation.addListener('focus', () => {
      if (navigating) {
        setIsDim(true);
      } else {
        setNavigating(true);
      }
    });
    return navigationListener;
  }, [navigation, navigating]);
  //

  // table details
  const [tableId, setTableId] = useState(null);
  const [localRoomId, setLocalRoomID] = useState(null);
  const [submitting, isSubmitting] = useState(false);

  const {token, globalTableId, updateTable, updateRoom} = useContext(
    GlobalContext,
  );

  const handleTableId = (tid) => {
    console.log(tid);
    if (
      tid.match(new RegExp(REGEX.TABLE_ID.replace('~num~', TABLE_ID_LENGTH)))
    ) {
      setTableId(tid);
      createTable();
    } else {
      ToastAndroid.show(SCAN.TID_ERROR, ToastAndroid.SHORT);
    }
  };

  const createTable = async () => {
    // TODO: Check this again
    isSubmitting(true);

    requestCreateTable(token, tableId)
      .then(async (res) => {
        console.log(res);
        if (res.data.error) {
          Alert.alert('Sorry, Incorrect Table Id');
        } else {
          updateTable(res.data._id);
          updateRoom(res.data.roomId);
          await AsyncStorage.setItem('tableId', res.data._id.toString());
          await AsyncStorage.setItem('roomId', res.data.roomId.toString());
          isSubmitting(false);
          // props.navigation.dispatch(
          //     CommonActions.reset({
          //         index: 0,
          //         routes: [
          //             {
          //                 name: 'Table',
          //                 //TODO: remove this
          //                 params: { roomId: res.data.roomId }
          //             },
          //         ],
          //     })
          // );
          console.log('VALID: ' + res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isSubmitting(false);
      });
  };

  const handleLogoPress = () => setIsDim(!isDim);
  const handleAlternatePress = () => setIsScanning(!isScanning);
  const handleJoinPress = () => navigation.navigate('JoinScene');

  return (
    <>
      {submitting && <SceneLoader />}

      <StatusBar backgroundColor={GRAY.T10} barStyle={'light-content'} />
      <CameraBackground
        isDim={isDim}
        onTableId={handleTableId}
        submitting={submitting}
      />
      {isScanning ? (
        <QRPlaceholder
          isDim={isDim}
          onLogoPress={handleLogoPress}
          onAlternatePress={handleAlternatePress}
        />
      ) : (
        <TableIDInput
          onLogoPress={handleLogoPress}
          onAlternatePress={handleAlternatePress}
          onTableId={handleTableId}
          isLoading={submitting}
        />
      )}
      <GreetUser name={name} holo="dark" />
      <ScanHeader isDim={isDim} />
      <ScanFooter onJoinPress={handleJoinPress} />
    </>
  );
};

export default ScanScene;
