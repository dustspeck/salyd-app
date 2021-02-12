import React from 'react';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Heading, Btn, BtnSecondary, CounterBtn} from '../Shared';
import {GRAY, TYPE} from '../../constants/colors';
import {ROUNDNESS} from '../../constants/theme';
import MenuItem from './MenuItem';

const {width, height} = Dimensions.get('screen');

const MenuList = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <MenuItem key={item.id} data={item} />}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: GRAY.T4,
            margin: 3,
            marginHorizontal: 15,
          }}
        />
      )}
      ListHeaderComponent={
        <View
          style={{flexDirection: 'row', margin: 5, backgroundColor: GRAY.T2}}>
          <Heading style={{fontSize: width / 22}}>PIZZA</Heading>
          <View
            style={{
              borderBottomWidth: 2,
              flex: 1,
              height: 0,
              marginVertical: width / 22,
            }}></View>
        </View>
      }
    />
  );
};

export default React.memo(MenuList);
