import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {APP_NAME, APP_NAME_CAPS} from '../../constants/strings';
import {Heading} from '.';
import {GRAY} from '../../constants/colors';

const {height, width} = Dimensions.get('screen');

const Header = ({navigation, isBack, heading, style}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: GRAY.T2,
        ...style,
      }}>
      <View style={{flexDirection: 'row'}}>
        {navigation.canGoBack() && isBack ? (
          <TouchableOpacity onPress={handleBack} activeOpacity={0.75}>
            <Icon name="chevron-back" size={28} style={{margin: 5}} />
          </TouchableOpacity>
        ) : null}

        <Heading style={{fontSize: width / 20}} viewStyle={{margin: 5}}>
          {heading ? heading : APP_NAME_CAPS}
        </Heading>
      </View>
      <Icon
        name="settings-sharp"
        size={width / 20}
        style={{margin: 5}}
        onPress={() => {}}
      />
    </View>
  );
};

export default Header;
