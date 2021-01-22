import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';
import OrderScene from '../../scenes/Home/OrderScene';

const Stack = createStackNavigator();

const HomeSceneNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="HomeScene">
        <Stack.Screen
          name="HomeScene"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderScene"
          component={OrderScene}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeSceneNavigator;
