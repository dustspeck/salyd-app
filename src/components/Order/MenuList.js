import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import {Heading, Btn, BtnSecondary, CounterBtn} from '../Shared';
import {GRAY, TYPE} from '../../constants/colors';
import {ROUNDNESS} from '../../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuItem from './MenuItem';

const {width, height} = Dimensions.get('screen');

const data = [
  {
    name: 'ITEM NO 1 with a long name',
    type: 0,
    description:
      'Leo vel orci porta non pulvinar neque laoreet. Sed blandit libero volutpat sed. Eu volutpat odio facilisis mauris. Pellentesque id nibh tortor id aliquet lectus.',
    price: 25,
    max: 3,
  },
  {
    name: 'ITEM NO 2 with a long name',
    type: 1,
    description:
      'Leo vel orci porta non pulvinar neque laoreet. Sed blandit libero volutpat sed. Eu volutpat odio facilisis mauris. Pellentesque id nibh tortor id aliquet lectus.',
    price: 135,
    max: 5,
  },
  {
    name: 'ITEM NO 3 with a long name',
    type: 2,
    description:
      'Leo vel orci porta non pulvinar neque laoreet. Sed blandit libero volutpat sed. Eu volutpat odio facilisis mauris. Pellentesque id nibh tortor id aliquet lectus.',
    price: 75,
    max: 4,
  },
];

const MenuList = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 5, backgroundColor: GRAY.T2}}>
        <Heading style={{fontSize: width / 22}}>PIZZA</Heading>
        <View
          style={{
            borderBottomWidth: 2,
            flex: 1,
            height: 0,
            marginVertical: width / 22,
          }}></View>
      </View>
      {data.map((data, i) => (
        <MenuItem key={i} data={data} />
      ))}
    </View>
  );
};

export default MenuList;
