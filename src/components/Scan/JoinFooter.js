import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ACCENT, GRAY, PRIMARY} from '../../constants/colors';
import {JOIN} from '../../constants/strings';
import {Heading} from '../Shared';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const JoinFooter = ({onScanPress}) => {
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
      <TouchableOpacity activeOpacity={0.75} onPress={onScanPress}>
        <Heading
          style={{
            fontSize: width / 22,
            color: PRIMARY,
            textAlign: 'center',
            marginTop: 20,
          }}>
          {JOIN.ALTERNATE_HEADING}
        </Heading>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: GRAY.T9, fontSize: width / 28}}>
            {JOIN.ALTERNATE_TEXT}
          </Text>
          <Icon
            name="chevron-forward"
            style={{
              color: GRAY.T9,
              fontSize: width / 28,
              textAlignVertical: 'center',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default JoinFooter;
