import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {Heading} from '../Shared';
import {SCAN} from '../../constants/strings';
import {ACCENT} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const ScanHeader = ({isDim}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: height / 5,
        alignSelf: 'center',
      }}>
      <Heading
        style={{
          fontSize: width / 20,
          color: ACCENT,
          textAlign: 'center',
        }}>
        {isDim ? SCAN.DIM : SCAN.HEADING}
      </Heading>
    </View>
  );
};

export default ScanHeader;
