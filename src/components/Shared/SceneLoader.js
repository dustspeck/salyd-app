import React from 'react';
import {View, Text, Modal, Dimensions, ActivityIndicator} from 'react-native';

import {PRIMARY} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const SceneLoader = () => {
  return (
    <Modal
      style={{height, width}}
      transparent={true}
      statusBarTranslucent={true}>
      <View
        style={{
          backgroundColor: '#0003',
          width,
          height,
          justifyContent: 'center',
        }}>
        <ActivityIndicator color={PRIMARY} size={width / 10} />
      </View>
    </Modal>
  );
};

export default SceneLoader;
