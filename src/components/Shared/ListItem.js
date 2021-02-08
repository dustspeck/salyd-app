import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {ListIcon} from '.';

const {width, height} = Dimensions.get('screen');

const ListItem = ({icon, text, action}) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={action}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          {icon ? <ListIcon name={icon} /> : null}
          <Text
            style={{
              textAlignVertical: 'center',
              fontSize: width / 25,
              textAlignVertical: 'center',
              margin: 10,
              marginLeft: 20,
            }}>
            {text}
          </Text>
        </View>
        {action ? (
          <Icon
            name="chevron-forward"
            style={{textAlignVertical: 'center'}}
            size={width / 25}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
