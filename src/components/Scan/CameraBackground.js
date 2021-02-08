import React from 'react';
import {View, Text, Dimensions, StatusBar, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Gradient from 'react-native-linear-gradient';

import {PRIMARY, GRAY} from '../../constants/colors';
import {QR_IDENTIFIER, TABLE_ID_LENGTH} from '../../constants/config';

const {width, height} = Dimensions.get('screen');

const CameraBackground = ({isDim, onTableId, submitting}) => {
  const onQRCodeRead = (data) => {
    if (data && !submitting) {
      if (data.data.startsWith(QR_IDENTIFIER)) {
        qr_tid = data.data.substr(QR_IDENTIFIER.length, TABLE_ID_LENGTH);
        onTableId(qr_tid);
      }
    }
  };

  return (
    <>
      {isDim ? (
        <View style={{width, height, backgroundColor: 'black'}} />
      ) : (
        <>
          <RNCamera
            style={{width, height}}
            onBarCodeRead={onQRCodeRead}
            captureAudio={false}
            notAuthorizedView={
              <View style={{height, width, backgroundColor: 'black'}}></View>
            }
            pendingAuthorizationView={
              <View style={{height, width, backgroundColor: 'black'}}></View>
            }
          />

          <Gradient
            colors={[GRAY.T10, '#0000']}
            style={{
              position: 'absolute',
              top: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
              height: height / 4,
              width,
            }}
          />
          <Gradient
            colors={['#0000', GRAY.T10]}
            style={{
              position: 'absolute',
              bottom: 0,
              height: height / 3,
              width,
            }}
          />
        </>
      )}
    </>
  );
};

export default CameraBackground;
