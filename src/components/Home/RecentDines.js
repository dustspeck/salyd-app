import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Heading} from '../Shared';
import DineHistory from '../History/DineHistory';

const {width, height} = Dimensions.get('screen');

const RecentDines = ({count, navigation}) => {
  const handleViewAll = () => {
    navigation.navigate('HistoryScene');
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
            name="time-outline"
            style={{
              fontSize: width / 22,
              textAlignVertical: 'center',
              marginRight: 5,
            }}
          />
          <Text
            style={{
              textAlignVertical: 'center',
              fontWeight: 'bold',
              fontSize: width / 22,
            }}>
            Recent Dines
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.75} onPress={handleViewAll}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Heading style={{textAlign: 'center', textAlignVertical: 'center'}}>
              {'View all '}
              <Icon name="arrow-forward" style={{fontSize: 15}} />
            </Heading>
          </View>
        </TouchableOpacity>
      </View>

      <DineHistory count={count} refresh />
    </>
  );
};

export default RecentDines;
