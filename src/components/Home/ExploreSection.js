import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ListIcon} from '../Shared';
import {GRAY} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const ExploreSection = ({navigation}) => {
  const handleNearbyPress = () => {
    // if (__DEV__) {
    navigation.navigate('OrderScene');
    // }
  };
  return (
    <View style={{margin: 10}}>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Icon
          name="compass-outline"
          style={{
            fontSize: width / 22,
            textAlignVertical: 'center',
            marginBottom: 10,
            marginRight: 5,
          }}
        />
        <Text
          style={{marginBottom: 10, fontWeight: 'bold', fontSize: width / 22}}>
          Explore
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity activeOpacity={0.75} onPress={handleNearbyPress}>
          <View style={{justifyContent: 'center'}}>
            <ListIcon name="pin-outline" />
            <Text style={{textAlign: 'center', color: GRAY.T7}}>Nearby</Text>
          </View>
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <ListIcon name="analytics-outline" />
          <Text style={{textAlign: 'center', color: GRAY.T7}}>Trending</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <ListIcon name="star-outline" />
          <Text style={{textAlign: 'center', color: GRAY.T7}}>Featured</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <ListIcon name="ribbon-outline" />
          <Text style={{textAlign: 'center', color: GRAY.T7}}>Offers</Text>
        </View>
      </View>
    </View>
  );
};

export default ExploreSection;
