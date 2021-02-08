import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {ACCENT, GRAY} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');
const OVERFLOW_MENU_ITEMS = 3;

const DineCard = ({data}) => {
  return (
    <View style={{height: height / 6}}>
      <View style={{height: null, justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: ACCENT + '55',
              borderRadius: 10,
              height: height / 15,
              width: height / 15,
              margin: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: height / 32,
                textAlign: 'center',
                color: GRAY.T5,
              }}>
              {data.restroDetails.name.substr(0, 1)}
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 10,
                fontWeight: 'bold',
                color: GRAY.T6,
                fontSize: width / 26,
              }}>
              {data.restroDetails.name}
            </Text>
            <Text
              style={{
                width: width / 1.75,
                fontSize: width / 32,
                color: GRAY.T6,
              }}>
              {data.restroDetails.address}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: GRAY.T4,
          marginHorizontal: 15,
          marginVertical: 5,
        }}
      />
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: width / 32,
              color: GRAY.T6,
              marginBottom: 7,
            }}>
            {/* TODO: Fix Localization */}
            {new Date(data.date).toLocaleString('en-US', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {data.menu.slice(0, OVERFLOW_MENU_ITEMS).map((menu, i) => (
            <View key={menu._id} style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: width / 35,
                  textDecorationLine: 'underline',
                }}>
                {menu.item.toUpperCase()}
              </Text>
              <Text
                style={{
                  fontSize: width / 35,
                }}>
                {` x ${menu.count}`}
              </Text>
              {i < data.menu.length - 1 && (
                <Text
                  style={{
                    fontSize: width / 35,
                  }}>
                  {' ,  '}
                </Text>
              )}
              {data.menu.length > OVERFLOW_MENU_ITEMS && (
                <Text
                  style={{
                    fontSize: width / 35,
                  }}>
                  {' and more'}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DineCard;
