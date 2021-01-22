import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StatusBar, AsyncStorage} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <MainNavigator />
    </>
  );
};

export default App;
