import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {CounterBtn} from '../Shared';
import IMAGE from '../../assets/images/bg/login.webp';
import {ROUNDNESS} from '../../constants/theme';
import {GRAY, TYPE, PRIMARY, TOPPINGS} from '../../constants/colors';
import {ORDER} from '../../constants/strings';
import {ScrollView} from 'react-native-gesture-handler';
import ItemModal from './ItemModal';

const {width, height} = Dimensions.get('screen');

const MenuItem = ({data}) => {
  const [showModal, setShowModal] = useState(false);

  const handleItemPress = () => {
    setShowModal(true);
  };

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
      {showModal && (
        <ItemModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
          renderType={renderType}
        />
      )}
      <View style={{flexDirection: 'row', margin: 5, marginVertical: 10}}>
        <TouchableOpacity onPress={handleItemPress} activeOpacity={0.75}>
          <Image
            source={IMAGE}
            resizeMode="cover"
            resizeMethod="resize"
            style={{
              width: width / 4,
              height: width / 4,
              borderRadius: ROUNDNESS / 2,
            }}
          />
        </TouchableOpacity>
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
            <TouchableOpacity onPress={handleItemPress} activeOpacity={0.75}>
              <Text style={{fontSize: width / 26}}>
                {data.name.length > 35
                  ? data.name.substr(0, 35) + '...'
                  : data.name}
              </Text>

              <Text
                style={{
                  marginHorizontal: 5,
                  width: width / 3.5,
                  textAlignVertical: 'bottom',
                  color: GRAY.T5,
                  fontSize: width / 32,
                }}>
                {data.description.substr(0, 30) + ' ...'}
              </Text>

              <View style={{flexDirection: 'row', margin: 5}}>
                {renderType(data.type)}
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              minWidth: width / 6,
              margin: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  margin: 5,
                  color: GRAY.T6,
                  textAlignVertical: 'bottom',
                }}>
                {'₹'}
              </Text>
              <Text
                style={{
                  fontSize: width / 22,
                  color: GRAY.T6,
                }}>
                {data.price}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: width / 48,
                  textAlign: 'center',
                  color: GRAY.T10,
                  marginVertical: 5,
                }}>
                {ORDER.REPEATING_ITEM}
              </Text>
              <CounterBtn max={data.max} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
