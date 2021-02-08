import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {CounterBtn} from '../Shared';
import IMAGE from '../../assets/images/bg/login.webp';
import {ROUNDNESS} from '../../constants/theme';
import {GRAY, TYPE} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const MenuItem = ({data}) => {
  const renderType = (type) => {
    let icon = 'help';
    let text = '';
    let color = '';

    switch (type) {
      case 0:
        icon = 'ellipse';
        text = 'Veg';
        color = TYPE.VEG;
        break;
      case 1:
        icon = 'egg';
        text = 'Contains Egg';
        color = TYPE.EGG;
        break;
      case 2:
        icon = 'ellipse';
        text = 'Non Veg';
        color = TYPE.NON;
        break;
      default:
        break;
    }
    let tag = (
      <>
        <Icon
          name={icon}
          size={width / 34}
          color={color}
          style={{marginVertical: 5}}
        />
        <Text
          style={{
            fontSize: width / 34,
            textAlignVertical: 'center',
            marginHorizontal: 5,
          }}>
          {text}
        </Text>
      </>
    );
    return tag;
  };

  return (
    <View>
      <View style={{flexDirection: 'row', margin: 5, marginVertical: 10}}>
        <Image
          source={IMAGE}
          resizeMode="cover"
          resizeMethod="resize"
          style={{
            width: width / 3.75,
            height: width / 3.75,
            borderRadius: ROUNDNESS / 2,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              marginHorizontal: 15,
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: width / 26}}>
              {data.name.length > 16
                ? data.name.toUpperCase().substr(0, 14) + '...'
                : data.name.toUpperCase()}
            </Text>

            <Text
              style={{
                marginHorizontal: 5,
                width: width / 3.5,
                textAlignVertical: 'bottom',
                color: GRAY.T5,
              }}>
              {data.description.substr(0, 30) + ' ...'}
            </Text>
            <View style={{flexDirection: 'row', margin: 5}}>
              {renderType(data.type)}
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              margin: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{textAlignVertical: 'bottom', margin: 5}}>
                {'₹'}
              </Text>
              <Text style={{fontSize: width / 22}}>{data.price}</Text>
            </View>
            <CounterBtn max={data.max} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
