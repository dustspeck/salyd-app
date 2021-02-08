import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ACCENT} from '../../constants/colors';
import {SCAN} from '../../constants/strings';
import {Heading} from '../Shared';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const ScanFooter = ({onJoinPress}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: (height * 12) / 17,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: width / 26,
          color: '#aaa',
          textAlign: 'center',
        }}>
        {'─────     OR     ─────'}
      </Text>
      <TouchableOpacity activeOpacity={0.75} onPress={onJoinPress}>
        <Heading
          style={{
            fontSize: width / 22,
            color: ACCENT,
            textAlign: 'center',
            marginTop: 20,
          }}>
          {SCAN.ALTERNATE_HEADING}
        </Heading>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: width / 28}}>
            {SCAN.ALTERNATE_TEXT}
          </Text>
          <Icon
            name="chevron-forward"
            style={{
              color: 'white',
              fontSize: width / 28,
              textAlignVertical: 'center',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ScanFooter;
