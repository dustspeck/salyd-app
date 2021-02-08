import React from 'react';
import {View, Text, StatusBar, Dimensions, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {SCAN} from '../../constants/strings';
import {GRAY} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const GreetUser = ({name, holo}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
      }}>
      <View
        style={{
          width,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: width / 18,
            fontWeight: 'bold',
            margin: 30,
            color: holo === 'dark' ? GRAY.T1 : GRAY.T8,
          }}>
          {SCAN.GREET.replace('$name', name)}
        </Text>
        <Icon
          name="help-circle-outline"
          style={{
            fontSize: width / 15,
            fontWeight: 'bold',
            margin: 30,
            color: holo === 'dark' ? GRAY.T1 : GRAY.T8,
          }}
        />
      </View>
    </View>
  );
};

export default GreetUser;
