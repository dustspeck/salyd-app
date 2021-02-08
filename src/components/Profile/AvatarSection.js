import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {GRAY, PRIMARY} from '../../constants/colors';
import {Heading, Label} from '../Shared';

const {width, height} = Dimensions.get('screen');

const AvatarSection = (props) => {
  return (
    <>
      <View
        style={{
          height: width / 3 + 10,
          width: width / 3 + 10,
          borderRadius: width / 6 + 5,
          margin: width / 10,
          borderColor: GRAY.T9,
          borderWidth: 5,
        }}>
        <Image
          source={{
            uri: props.image
              ? props.image
              : 'https://sanjaymotels.com/wp-content/uploads/2019/01/testimony.png',
          }}
          style={{
            height: width / 3,
            width: width / 3,
            borderRadius: width / 6,
            borderColor: GRAY.T2,
            borderWidth: 5,
          }}
        />
      </View>
      <Heading style={{fontSize: width / 15}}>{props.name}</Heading>

      <Label style={{fontSize: width / 25, color: GRAY.T4}}>
        {props.email}
      </Label>
    </>
  );
};

export default AvatarSection;
