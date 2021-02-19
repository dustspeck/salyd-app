import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';
import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ApolloProvider} from '@apollo/react-hooks';
import {GRAY} from './src/constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = new createHttpLink({
  uri: 'http://9a94f799e70c.ngrok.io',
});

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
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
