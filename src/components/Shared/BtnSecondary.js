import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {ROUNDNESS} from '../../constants/theme';
import {THEME, PRIMARY, GRAY} from '../../constants/colors';

const BtnSecondary = (props) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };
  return (
    <View>
      <TouchableOpacity
        {...props}
        style={{
          backgroundColor: '#0000',
          height: 40,
          width: null,
          borderRadius: ROUNDNESS / 2,
          borderWidth: 2,
          borderColor: props.loading ? GRAY.T5 : PRIMARY,
          ...props.style,
        }}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.75}>
        <Text
          style={{
            flex: 1,
            fontSize: 15,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: props.loading ? GRAY.T5 : PRIMARY,
            marginHorizontal: 20,
          }}>
          {props.loading
            ? props.loadingText
              ? props.loadingText
              : 'Loading...'
            : props.title}
        </Text>
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

export default BtnSecondary;
