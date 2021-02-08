import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const Badge = ({icon, color, text}) => {
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: color,
        flexDirection: 'row',
        marginHorizontal: 20,
      }}>
      <Icon
        name={icon}
        color={color}
        style={{marginVertical: 6}}
        size={width / 26}
      />
      <Text
        style={{
          margin: 6,
          textAlignVertical: 'center',
          fontSize: width / 30,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;
