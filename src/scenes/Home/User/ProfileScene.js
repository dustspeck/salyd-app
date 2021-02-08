import React, {useContext} from 'react';
import {ScrollView, Alert, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';

import {GlobalContext} from '../../../context/GlobalState';

import {SceneBuilder, Header} from '../../../components/Shared';

import {LOG_OUT} from '../../../constants/strings';
import AvatarSection from '../../../components/Profile/AvatarSection';
import OptionsList from '../../../components/Profile/OptionsList';

const ProfileScene = ({navigation}) => {
  const {user, email, token} = useContext(GlobalContext);
  const {_id, name, phone, image} = user;

  const handleEditProfile = () => {
    navigation.navigate('EditProfileScene', {
      name,
      email,
      phone,
    });
  };

  const handleDineHistory = () => navigation.navigate('HistoryScene');

  const handleGetHelp = () => navigation.navigate('GetHelpScene');

  const handleLogout = async () => {
    Alert.alert(LOG_OUT.HEADING, LOG_OUT.BODY, [
      {text: LOG_OUT.CANCEL, onPress: () => {}},
      {
        text: LOG_OUT.OK,
        onPress: async () => {
          const token = await AsyncStorage.removeItem('token');
          const user = await AsyncStorage.removeItem('user');
          if (!token) {
            navigation.dispatch(StackActions.replace('World'));
          }
        },
      },
    ]);
  };

  return (
    <SceneBuilder>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} heading="PROFILE" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <AvatarSection name={name} image={image} email={email} />

          <OptionsList
            handleEditProfile={handleEditProfile}
            handleDineHistory={handleDineHistory}
            handleGetHelp={handleGetHelp}
            handleLogout={handleLogout}
          />
        </View>
      </ScrollView>
    </SceneBuilder>
  );
};

export default ProfileScene;
