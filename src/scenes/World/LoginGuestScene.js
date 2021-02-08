import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {SceneBuilder} from '../../components/Shared';

const LoginGuestScene = ({navigation}) => {
  const handleGuestLogin = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };
  return (
    <SceneBuilder>
      <Text>Login Guest Scene</Text>
      <Button title={'Login as Guest'} onPress={handleGuestLogin} />
    </SceneBuilder>
  );
};

export default LoginGuestScene;
