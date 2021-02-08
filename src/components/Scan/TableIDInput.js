import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {PRIMARY, GRAY} from '../../constants/colors';
import {ROUNDNESS} from '../../constants/theme';
import {SCAN, REGEX} from '../../constants/strings';
import {TABLE_ID_LENGTH} from '../../constants/config';
import LOGO from '../../assets/images/logo/colored_100.png';
import {Heading} from '../Shared';

const {width, height} = Dimensions.get('screen');
const BOX_WIDTH = width / 1.5;

const TableIDInput = ({
  onLogoPress,
  onAlternatePress,
  onTableId,
  isLoading,
}) => {
  const [tid, setTid] = useState('');

  const handleTableIDChange = (text) => {
    if (text.length <= TABLE_ID_LENGTH) setTid(text);
    if (text.length == TABLE_ID_LENGTH) onTableId(text);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height,
        position: 'absolute',
        left: BOX_WIDTH / 4,
        top: -BOX_WIDTH / 8,
      }}>
      <View>
        <View
          style={{
            position: 'absolute',
            left: -height / 2,
            top: -width / 3,
            borderColor: '#0005',
            borderRadius: ROUNDNESS + height / 2,
            borderWidth: height / 2,
          }}>
          <View
            style={{
              height: BOX_WIDTH,
              width: BOX_WIDTH,
              borderRadius: ROUNDNESS,
              borderWidth: BOX_WIDTH / 100,
              borderColor: GRAY.T5,
              backgroundColor: GRAY.T3,
            }}>
            <View
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                height: BOX_WIDTH,
                width: BOX_WIDTH,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.75} onPress={onLogoPress}>
                  <Image
                    resizeMode={'contain'}
                    style={{
                      width: BOX_WIDTH / 6,
                      height: BOX_WIDTH / 6,
                      marginBottom: 20,
                    }}
                    source={LOGO}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: BOX_WIDTH / 12,
                    paddingHorizontal: 10,
                    textAlign: 'center',
                    color: GRAY.T8,
                  }}>
                  {SCAN.TID_TEXT}
                </Text>
                <Text
                  style={{
                    fontSize: BOX_WIDTH / 26,
                    marginVertical: 10,
                    color: GRAY.T6,
                  }}>
                  {SCAN.TID_INFO}
                </Text>
                <TextInput
                  editable={!isLoading}
                  keyboardType="numeric"
                  placeholder={SCAN.TID_PLACEHOLDER}
                  placeholderTextColor={GRAY.T5}
                  onChangeText={handleTableIDChange}
                  value={tid}
                  maxLength={TABLE_ID_LENGTH}
                  style={{
                    backgroundColor: GRAY.T4,
                    color: isLoading ? GRAY.T5 : GRAY.T9,
                    borderRadius: ROUNDNESS / 2,
                    width: BOX_WIDTH / 1.35,
                    paddingHorizontal: BOX_WIDTH / 18,
                    fontSize: BOX_WIDTH / 15,
                    fontWeight: 'bold',
                    letterSpacing: BOX_WIDTH / 32,
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: BOX_WIDTH,
              top: BOX_WIDTH,
            }}>
            <TouchableOpacity activeOpacity={0.75} onPress={onAlternatePress}>
              <Text
                style={{
                  color: GRAY.T4,
                  fontSize: width / 28,
                  padding: 5,
                }}>
                {SCAN.TID_ALTERNATE}
              </Text>
            </TouchableOpacity>
            <Icon
              name="chevron-forward"
              style={{
                color: GRAY.T4,
                fontSize: width / 28,
                textAlignVertical: 'center',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TableIDInput;
