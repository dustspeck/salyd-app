import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WorldNavigator from './World/WorldNavigator';
import HomeSceneNavigator from './Home/HomeSceneNavigator';

//State
import {GlobalProvider} from '../context/GlobalState';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialScreen, setInitialScreen] = useState('World');

  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    const checkToken = async () => {
      const user = await AsyncStorage.getItem('user');
      console.log(user);
      if (user) {
        setInitialScreen('Home');
      }
      setIsReady(true);
    };
    checkToken();
  }, []);

  if (!isReady) {
    return null;
  }
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}>
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
    </GlobalProvider>
  );
};

export default MainNavigator;
