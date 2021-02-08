import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {PRIMARY, GRAY} from '../../constants/colors';
import {ROUNDNESS} from '../../constants/theme';
import {SCAN} from '../../constants/strings';
import LOGO from '../../assets/images/logo/colored_100.png';

const {width, height} = Dimensions.get('screen');
const QR_WIDTH = width / 1.5;

const QRPlaceholder = ({isDim, onLogoPress, onAlternatePress}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height,
        position: 'absolute',
        left: QR_WIDTH / 4,
        top: -QR_WIDTH / 8,
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
              height: QR_WIDTH,
              width: QR_WIDTH,
              borderRadius: ROUNDNESS,
              borderWidth: QR_WIDTH / 100,
              borderColor: isDim ? GRAY.T5 : PRIMARY,
            }}>
            <View
              style={{
                ...styles.qrEye,
                top: 0,
                backgroundColor: isDim ? GRAY.T5 : PRIMARY,
              }}
            />
            <View
              style={{
                ...styles.qrEye,
                bottom: 0,
                backgroundColor: isDim ? GRAY.T5 : PRIMARY,
              }}
            />
            <View
              style={{
                right: 0,
                ...styles.qrEye,
                backgroundColor: isDim ? GRAY.T5 : PRIMARY,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: QR_WIDTH,
                width: QR_WIDTH,
              }}>
              <TouchableOpacity activeOpacity={0.75} onPress={onLogoPress}>
                <Image
                  resizeMode={'contain'}
                  style={{
                    width: QR_WIDTH / 4,
                    height: QR_WIDTH / 4,
                  }}
                  source={LOGO}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: QR_WIDTH,
              top: QR_WIDTH,
            }}>
            <TouchableOpacity activeOpacity={0.75} onPress={onAlternatePress}>
              <Text
                style={{
                  color: GRAY.T4,
                  fontSize: width / 28,
                  padding: 5,
                }}>
                {SCAN.SCAN_ALTERNATE}
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

const styles = StyleSheet.create({
  qrEye: {
    position: 'absolute',
    height: QR_WIDTH / 4.5,
    width: QR_WIDTH / 4.5,
    margin: 5,
    borderRadius: ROUNDNESS - 5,
    opacity: 0.45,
  },
});

export default QRPlaceholder;
