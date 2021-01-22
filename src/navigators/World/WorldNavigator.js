import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScene from '../../scenes/World/WelcomeScene';

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
      </Stack.Navigator>
    </>
  );
};

export default HomeSceneNavigator;
