import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HistoryScene from '../../scenes/Home/HistoryScene';
import ScanScene from '../../scenes/Home/ScanScene';
import ProfileScene from '../../scenes/Home/ProfileScene';

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
        initialParams={{load: true}}
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
            iconName = 'home-sharp';
          } else if (route.name === 'HistoryScene') {
            iconName = 'restaurant';
          } else if (route.name === 'ProfileScene') {
            iconName = 'document';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          height: height / 12,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="HistoryScene" component={HistoryScene} />
      <Tab.Screen name="ScannerScene" component={ScannerStackScreen} />
      <Tab.Screen name="ProfileScene" component={ProfileScene} />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
