import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Heading} from '../Shared';

const {width, height} = Dimensions.get('screen');

const OutletHeader = ({
  headerColor,
  handleBack,
  headingTint,
  hasScrolled,
  name,
}) => {
  return (
    <View style={{marginTop: 30, flexDirection: 'row'}}>
      <TouchableOpacity onPress={handleBack} activeOpacity={0.75}>
        <Icon
          name="chevron-back"
          size={28}
          style={{
            margin: 10,
            color: `rgb(${headingTint},${headingTint},${headingTint})`,
          }}
        />
      </TouchableOpacity>

      <Heading
        style={{
          fontSize: width / 20,
          color: `rgb(${headingTint},${headingTint},${headingTint})`,
        }}
        viewStyle={{margin: 10}}>
        {hasScrolled ? name : 'Welcome to'}
      </Heading>
    </View>
  );
};

export default OutletHeader;
