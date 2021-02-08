import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScene from '../../scenes/Home/HomeScene';
import ScanScene from '../../scenes/Home/ScanScene';
import JoinScene from '../../scenes/Home/JoinScene';
import ProfileScene from '../../scenes/Home/User/ProfileScene';

import {PRIMARY, GRAY} from '../../constants/colors';

enableScreens();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');

const ScannerStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ScannerScene">
      <Stack.Screen
        name="ScannerScene"
        component={ScanScene}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JoinScene"
        component={JoinScene}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="ScannerScene"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'ScannerScene') {
            iconName = 'scan';
          } else if (route.name === 'HomeScene') {
            iconName = 'compass';
          } else if (route.name === 'ProfileScene') {
            iconName = 'person-circle';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY,
        inactiveTintColor: GRAY.T6,
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          height: height / 14,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="HomeScene" component={HomeScene} />
      <Tab.Screen name="ScannerScene" component={ScannerStackScreen} />
      <Tab.Screen name="ProfileScene" component={ProfileScene} />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
