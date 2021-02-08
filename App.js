import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';

import {GRAY} from './src/constants/colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={GRAY.T2}
        translucent
      />
      <MainNavigator />
    </>
  );
};

export default App;
