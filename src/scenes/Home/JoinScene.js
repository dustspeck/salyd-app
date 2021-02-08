import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Dimensions, StatusBar, Platform} from 'react-native';

import {GlobalContext} from '../../context/GlobalState';

import GreetUser from '../../components/Scan/GreetUser';
import JoinFooter from '../../components/Scan/JoinFooter';
import {SceneBuilder, Heading} from '../../components/Shared';
import {GRAY} from '../../constants/colors';
import {TextInput} from 'react-native-gesture-handler';
import {JOIN} from '../../constants/strings';
import {ROUNDNESS} from '../../constants/theme';

const {width, height} = Dimensions.get('screen');

const JoinScene = ({navigation}) => {
  const {user, email} = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setImage(user.image);
    }
  }, [user]);

  const handleScanPress = () => navigation.navigate('ScannerScene');

  return (
    <>
      <View
        style={{
          minHeight:
            Platform.OS === 'android'
              ? height + StatusBar.currentHeight
              : height + 30,
          backgroundColor: GRAY.T2,
        }}>
        <GreetUser name={name} holo="light" />

        <View
          style={{
            position: 'absolute',
            height: height / 1.75,
            width,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Heading
              style={{
                fontSize: width / 16,
                marginBottom: width / 10,
                color: GRAY.T9,
              }}>
              {JOIN.HEADING}
            </Heading>
            <Text style={{marginBottom: 10, fontSize: width / 24}}>
              {JOIN.TEXT}
            </Text>

            <TextInput
              keyboardType="number-pad"
              placeholder={JOIN.PLACEHOLDER}
              placeholderTextColor={GRAY.T5}
              style={{
                width: width / 1.35,
                borderRadius: ROUNDNESS / 2,
                fontSize: width / 10,
                fontWeight: 'bold',
                letterSpacing: width / 12,
                textAlign: 'center',
                backgroundColor: GRAY.T3,
              }}
            />

            <Text
              style={{
                marginTop: 30,
                fontSize: width / 24,
                width: width / 1.5,
                textAlign: 'center',
                color: GRAY.T6,
              }}>
              {JOIN.INFO}
            </Text>
          </View>
        </View>
        <JoinFooter onScanPress={handleScanPress} />
      </View>
    </>
  );
};

export default JoinScene;
