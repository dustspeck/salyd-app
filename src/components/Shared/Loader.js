import React from 'react';
import {View, Dimensions, ActivityIndicator} from 'react-native';
import {PRIMARY} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const Loader = () => {
  return (
    <View>
      <ActivityIndicator size={width / 16} color={PRIMARY} />
    </View>
  );
};

export default Loader;
