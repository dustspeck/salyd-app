import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';
import OrderScene from '../../scenes/Home/OrderScene';
import EditProfileScene from '../../scenes/Home/User/EditProfileScene';
import HistoryScene from '../../scenes/Home/User/HistoryScene';
import GetHelpScene from '../../scenes/Home/GetHelpScene';
import SettingsScene from '../../scenes/Home/SettingsScene';

const Stack = createStackNavigator();

const HomeSceneNavigator = () => {
  return (
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
      <Stack.Screen
        name="EditProfileScene"
        component={EditProfileScene}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryScene"
        component={HistoryScene}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetHelpScene"
        component={GetHelpScene}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsScene"
        component={SettingsScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeSceneNavigator;
