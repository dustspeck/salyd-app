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

//Components
import {
  SceneBuilder,
  TextBox,
  Label,
  Heading,
  Btn,
} from '../../components/Shared';

//Constants
import {SIGN_UP} from '../../constants/strings';
import {GRAY} from '../../constants/colors';

//Assets
import BG from '../../assets/images/bg/signup.webp';
import LOGO from '../../assets/images/logo/colored_100.png';

const {height, width} = Dimensions.get('window');

enableScreens();
const SignUpScene = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, isSubmitting] = useState(false);

  const handleNameChange = (text) => setName(text);
  const handlePhoneChange = (text) => setPhone(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSignUp = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  const handleLogin = () => {
    navigation.dispatch(StackActions.replace('LoginScene'));
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
              maxHeight: height / 1.75,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Heading style={{fontSize: height / 30, fontWeight: 'bold'}}>
                {SIGN_UP.ACTION}
              </Heading>
              <Image
                source={LOGO}
                style={{height: 50, width: 50}}
                resizeMode="contain"
              />
            </View>

            <TextBox
              label="Full Name"
              value={name}
              onChangeText={handleNameChange}
            />
            <TextBox
              label="Phone Number"
              value={phone}
              onChangeText={handlePhoneChange}
              keyboardType="number-pad"
            />
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
            />

            <Btn
              title={SIGN_UP.ACTION}
              onPress={handleSignUp}
              loading={submitting}
              loadingText={SIGN_UP.LOADING}
            />

            <Heading onPress={handleLogin} style={{textAlign: 'center'}}>
              {SIGN_UP.ALTERNATE}
              <Icon name="arrow-forward" style={{fontSize: 15}} />
            </Heading>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScene;
