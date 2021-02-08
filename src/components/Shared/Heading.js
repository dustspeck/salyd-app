import React from 'react';
import {View, Text} from 'react-native';

const Heading = (props) => {
  return (
    <View style={{margin: 10, ...props.viewStyle}}>
      <Text {...props} style={{...props.style, fontWeight: 'bold'}}>
        {props.children}
      </Text>
    </View>
  );
};

export default Heading;
