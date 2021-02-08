import React from 'react';
import {View, Text, Button, Image, Dimensions, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  SceneBuilder,
  Heading,
  Btn,
  BtnSecondary,
} from '../../components/Shared';

import {WELCOME} from '../../constants/strings';
import Icon from 'react-native-vector-icons/Ionicons';
import {PRIMARY} from '../../constants/colors';

const {height, width} = Dimensions.get('window');

const WelcomeScene = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('LoginScene');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScene');
  };

  const handleGuest = () => {
    navigation.navigate('LoginGuestScene');
  };

  return (
    <SceneBuilder>
      <View style={{margin: 30}}>
        <Heading
          style={{
            fontSize: height / 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {WELCOME.HEADING}
        </Heading>
        <Btn
          title={'Login'}
          onPress={handleLogin}
          style={{marginVertical: 10}}
        />
        <BtnSecondary
          title={'SignUp'}
          onPress={handleSignUp}
          style={{marginVertical: 10}}
        />

        <Heading onPress={handleGuest} style={{textAlign: 'center'}}>
          {WELCOME.GUEST_TEXT}
          <Icon name="arrow-forward" style={{fontSize: 15}} />
        </Heading>
      </View>
    </SceneBuilder>
  );
};

export default WelcomeScene;
