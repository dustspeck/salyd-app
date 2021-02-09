import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ToastAndroid} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {PRIMARY} from '../../constants/colors';
import {ROUNDNESS} from '../../constants/theme';

const {width, height} = Dimensions.get('screen');

const CounterBtn = ({onChange, max}) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (count < max) setCount(count + 1);
    else
      ToastAndroid.show(
        `Can not add more than ${max} items`,
        ToastAndroid.SHORT,
      );
  };
  const handleSub = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (onChange) onChange(count);
  }, [count]);
  return (
    <View style={{flexDirection: 'row'}}>
      {count > 0 && (
        <TouchableOpacity onPress={handleSub}>
          <View
            style={{
              backgroundColor: PRIMARY + '55',
              padding: 5,
              borderTopLeftRadius: ROUNDNESS / 2,
              borderBottomLeftRadius: ROUNDNESS / 2,
            }}>
            <Text style={{fontSize: width / 22, paddingHorizontal: 3}}>−</Text>
          </View>
        </TouchableOpacity>
      )}
      {count < 1 && (
        <TouchableOpacity onPress={handleAdd}>
          <Text
            style={{
              textAlignVertical: 'center',
              fontWeight: 'bold',
              fontSize: width / 24,
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      )}
      {count > 0 && (
        <Text
          style={{
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: width / 24,
            marginHorizontal: 10,
          }}>
          {count}
        </Text>
      )}
      {count > 0 && (
        <TouchableOpacity onPress={handleAdd}>
          <View
            style={{
              backgroundColor: PRIMARY + '55',
              padding: 5,
              borderTopRightRadius: ROUNDNESS / 2,
              borderBottomRightRadius: ROUNDNESS / 2,
            }}>
            <Text style={{fontSize: width / 22, paddingHorizontal: 3}}>+</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CounterBtn;
