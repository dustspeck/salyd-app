import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScene from '../../scenes/World/WelcomeScene';
import LoginScene from '../../scenes/World/LoginScene';
import SignUpScene from '../../scenes/World/SignUpScene';
import LoginGuestScene from '../../scenes/World/LoginGuestScene';
import ForgotPasswordScene from '../../scenes/World/ForgotPasswordScene';

const Stack = createStackNavigator();

const HomeSceneNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="WelcomeScene">
        <Stack.Screen
          name="WelcomeScene"
          component={WelcomeScene}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScene"
          component={LoginScene}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScene"
          component={SignUpScene}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginGuestScene"
          component={LoginGuestScene}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordScene"
          component={ForgotPasswordScene}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeSceneNavigator;
