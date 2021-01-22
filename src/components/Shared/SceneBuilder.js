import React from 'react';
import {Dimensions} from 'react-native';
import {View, Text} from 'react-native';

import {GRAY} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const SceneBuilder = (props) => {
  return (
    <View style={{minHeight: height}}>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        {props.children}
      </View>
    </View>
  );
};

export default SceneBuilder;
