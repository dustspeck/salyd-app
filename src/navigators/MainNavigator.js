import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WorldNavigator from './World/WorldNavigator';
import HomeSceneNavigator from './Home/HomeSceneNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="World">
        <Stack.Screen
          name="World"
          component={WorldNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeSceneNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
