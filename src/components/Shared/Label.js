import React from 'react';
import {View, Text} from 'react-native';

const Label = (props) => {
  return (
    <View style={{margin: 10, ...props.viewStyle}}>
      <Text {...props} style={{...props.style}}>
        {props.children}
      </Text>
    </View>
  );
};

export default Label;
