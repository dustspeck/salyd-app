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
import {gql, useMutation} from '@apollo/client';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  //Mutation definition
  const NEW_ROOM = gql`
    mutation NewRoom($tableId: Int!) {
      newRoom(tableId: $tableId) {
        room {
          _id
          tableOf {
            _id
            address
            name
            menu {
              _id
              name
              price
              maxQuantity
              description
              category
            }
          }
        }
      }
    }
  `;

  const handleTableId = (tid) => {
    if (
      tid.match(new RegExp(REGEX.TABLE_ID.replace('~num~', TABLE_ID_LENGTH)))
    ) {
      setTableId(tid);
      createTable(parseInt(tid));
    } else {
      ToastAndroid.show(SCAN.TID_ERROR, ToastAndroid.SHORT);
    }
  };

  const [newRoom] = useMutation(NEW_ROOM, {
    async onCompleted(data) {
      const {room} = data.newRoom;

      console.log('room', room);

      //Todo: Populating restuarant fields on server side
      //Meanwhile can fetch resturant details from this restroId

      const restaurantId = tableId.toString().substring(0, 6);

      updateTable(tableId);
      updateRoom(room._id);
      await AsyncStorage.setItem('tableId', tableId.toString());
      await AsyncStorage.setItem('roomId', room._id.toString());

      isSubmitting(false);

      if (Platform.OS === 'android') {
        ToastAndroid.show('Room made successfully', ToastAndroid.SHORT);
      }
      navigation.dispatch(
        StackActions.replace('OrderScene', {restro: room.tableOf}),
      );
    },
    onError(error) {
      isSubmitting(false);
      if (Platform.OS === 'android') {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      }
    },
  });

  const createTable = async (tid) => {
    isSubmitting(true);
    newRoom({
      variables: {tableId: tid},
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
