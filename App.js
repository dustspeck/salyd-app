import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import {GRAY} from './src/constants/colors';

const client = new ApolloClient({
  uri: 'http://e3a07b67d0d2.ngrok.io ',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={GRAY.T2}
          translucent
        />
        <MainNavigator />
      </ApolloProvider>
    </>
  );
};

export {client};
export default App;
