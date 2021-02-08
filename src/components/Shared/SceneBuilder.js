import React from 'react';
import {Dimensions, StatusBar, Platform} from 'react-native';
import {View, Text} from 'react-native';

import {GRAY} from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const SceneBuilder = (props) => {
  return (
    <View
      style={{
        minHeight:
          Platform.OS === 'android'
            ? height + StatusBar.currentHeight
            : height + 30,
        backgroundColor: props.transparent ? 'transparent' : GRAY.T2,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
      }}>
      <View
        {...props}
        style={
          props.snapHorizontal
            ? {marginVertical: 10, ...props.style}
            : {marginHorizontal: 15, marginVertical: 10, ...props.style}
        }>
        {props.children}
      </View>
    </View>
  );
};

export default SceneBuilder;
