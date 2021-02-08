import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {ROUNDNESS} from '../../constants/theme';
import {THEME, TOPPINGS, LETTUCE, PRIMARY, GRAY} from '../../constants/colors';

const {height, width} = Dimensions.get('screen');

const ListIcon = (props) => {
  return (
    <View
      style={{
        padding: width / 30,
        backgroundColor: THEME.T1 + '50',
        borderRadius: ROUNDNESS / 2,
      }}>
      {props.name ? (
        <Icon name={props.name} style={{color: GRAY.T9}} size={width / 15} />
      ) : null}
    </View>
  );
};

export default ListIcon;
