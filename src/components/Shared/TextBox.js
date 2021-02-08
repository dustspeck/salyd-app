import React, {useState, useRef} from 'react';
import {View, Text, TextInput} from 'react-native';

import {ROUNDNESS} from '../../constants/theme';
import {THEME, GRAY, PRIMARY, ACCENT} from '../../constants/colors';

const TextBox = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const inputRef = useRef();

  const handleFocus = () => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur();
  };

  const handleType = (text) => {
    setValue(text);
    if (props.onChangeText) props.onChangeText(text);
  };

  return (
    <View style={{marginVertical: 10, marginVertical: 15, ...props.viewStyle}}>
      <TextInput
        {...props}
        style={{
          backgroundColor: GRAY.T2,
          borderColor: PRIMARY,
          borderWidth: 1,
          borderRadius: ROUNDNESS / 2,
          height: 45,
          paddingHorizontal: ROUNDNESS / 2,
          ...props.style,
        }}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit={true}
        value={value}
        onChangeText={(text) => handleType(text)}
      />

      <Text
        style={{
          position: 'absolute',
          left: ROUNDNESS / 2,
          top: !isFocused && value === '' ? 13 : -20,
          color: !isFocused && value === '' ? GRAY.T5 : ACCENT,
        }}
        onPress={() => {
          inputRef.current.focus();
        }}>
        {props.label ? props.label : null}
      </Text>
    </View>
  );
};

export default TextBox;
