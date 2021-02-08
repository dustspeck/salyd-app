import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Dimensions,
  Platform,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//State
import {GlobalContext} from '../../context/GlobalState';

//Components
import {
  SceneBuilder,
  TextBox,
  Label,
  Heading,
  Btn,
} from '../../components/Shared';

//Configs
import {apiUrl} from '../../../config/keys';

//Constants
import {LOG_IN, REGEX} from '../../constants/strings';
import {GRAY} from '../../constants/colors';

//Assets
import BG from '../../assets/images/bg/login.webp';
import LOGO from '../../assets/images/logo/colored_100.png';

const {height, width} = Dimensions.get('window');

enableScreens();
const LoginScene = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, isSubmitting] = useState(false);
  const {updateUser, user, token, updateToken} = useContext(GlobalContext);

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleForgot = () => {
    navigation.navigate('ForgotPasswordScene');
  };
  const handleSignUp = () => {
    navigation.dispatch(StackActions.replace('SignUpScene'));
  };

  const handleLogin = () => {
    if (email) {
      if (password) {
        if (email.match(REGEX.EMAIL)) {
          isSubmitting(true);
          console.log('isSubmitting(true)');
          Axios.post(`${apiUrl}/signin`, {
            email: email,
            password: password,
          })
            .then(async (res) => {
              console.log('res: ' + JSON.stringify(res.data));
              updateUser(res.data.user);
              updateToken(res.data.token);

              //Updating AsyncStorage for persistence
              await AsyncStorage.setItem('token', res.data.token);
              await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
              isSubmitting(false);
              console.log('isSubmitting(false)');
              if (Platform.OS === 'android')
                ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
              navigation.dispatch(StackActions.replace('Home'));
            })
            .catch((err) => {
              isSubmitting(false);
              console.log('isSubmitting(false)');
              console.log(err);
              if (Platform.OS === 'android')
                ToastAndroid.show('Error Occurred', ToastAndroid.SHORT);
            });
        } else {
          if (Platform.OS === 'android')
            ToastAndroid.show('Invalid Email', ToastAndroid.SHORT);
        }
      } else {
        if (Platform.OS === 'android')
          ToastAndroid.show('Password can not be empty', ToastAndroid.SHORT);
      }
    } else {
      if (Platform.OS === 'android')
        ToastAndroid.show('Email can not be empty', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0005"
        translucent={true}
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={-height / 2}
        style={{flex: 1, alignItems: 'center'}}
        behavior="position">
        <View style={{flex: 1}}>
          <Image source={BG} style={{width, height: 1.5 * width}} />
        </View>

        <View style={{backgroundColor: GRAY.T2, paddingHorizontal: 10}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              margin: 30,
              minHeight: height / 10,
              maxHeight: height / 2.5,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading style={{fontSize: height / 30, fontWeight: 'bold'}}>
                {LOG_IN.ACTION}
              </Heading>
              <Image
                source={LOGO}
                style={{height: 50, width: 50}}
                resizeMode="contain"
              />
            </View>
            <TextBox
              label="Email"
              value={email}
              onChangeText={handleEmailChange}
              autoCapitalize={'none'}
              autoCompleteType={'email'}
            />
            <TextBox
              label="Password"
              value={password}
              onChangeText={handlePasswordChange}
              textContentType={'password'}
              autoCompleteType={'password'}
              secureTextEntry={true}
              viewStyle={{marginBottom: 2}}
            />

            <View style={{flexDirection: 'row-reverse'}}>
              <Label
                onPress={handleForgot}
                style={{
                  marginTop: 0,
                  color: GRAY.T6,
                  textDecorationLine: 'underline',
                }}>
                {LOG_IN.FORGOT}
              </Label>
            </View>

            <Btn
              title={LOG_IN.ACTION}
              onPress={handleLogin}
              loading={submitting}
              loadingText={LOG_IN.LOADING}
            />

            <Heading onPress={handleSignUp} style={{textAlign: 'center'}}>
              {LOG_IN.ALTERNATE}
              <Icon name="arrow-forward" style={{fontSize: 15}} />
            </Heading>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScene;
