import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import {LEAVE_ORDER} from '../../constants/strings';
import OutletHeader from '../../components/Order/OutletHeader';
import {SceneBuilder, Header, Heading} from '../../components/Shared';
import {GRAY} from '../../constants/colors';
import MenuList from '../../components/Order/MenuList';

const {width, height} = Dimensions.get('screen');

const OrderScene = ({navigation}) => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headingTint, setHeadingTint] = useState(255);

  const handleOnScroll = (event) => {
    setScrollYPosition(event.nativeEvent.contentOffset.y);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleParallaxImageScrolled = (scrolled) => {
    if (scrolled) {
      setHasScrolled(true);
      setHeaderColor(GRAY.T2);
      setHeadingTint(0);
    } else {
      setHasScrolled(false);
      setHeaderColor('transparent');
    }
  };

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // if (hasItemsInCart) {
        //   return;
        // }

        e.preventDefault();

        Alert.alert(LEAVE_ORDER.HEADING, LEAVE_ORDER.BODY, [
          {text: LEAVE_ORDER.CANCEL, onPress: () => {}},
          {
            text: LEAVE_ORDER.OK,
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]);
      }),
    [navigation],
  );

  return (
    <ScrollView onScroll={handleOnScroll} stickyHeaderIndices={[1]}>
      <OutletHeader
        yOffset={scrollYPosition}
        onParallaxImageScrolled={handleParallaxImageScrolled}
        headingTint={headingTint}
        setHeadingTint={setHeadingTint}
      />
      <View
        style={{
          position: 'absolute',
          width,
          backgroundColor: headerColor,
        }}>
        <View style={{marginTop: 30, flexDirection: 'row'}}>
          <TouchableOpacity onPress={handleBack} activeOpacity={0.75}>
            <Icon
              name="chevron-back"
              size={28}
              style={{
                margin: 10,
                color: `rgb(${headingTint},${headingTint},${headingTint})`,
              }}
            />
          </TouchableOpacity>

          <Heading
            style={{
              fontSize: width / 20,
              color: `rgb(${headingTint},${headingTint},${headingTint})`,
            }}
            viewStyle={{margin: 10}}>
            {hasScrolled ? 'Indian Food Hotel' : 'Welcome to'}
          </Heading>
        </View>
      </View>
      {/* <View style={{margin: 10, backgroundColor: 'red'}}> */}
      <SceneBuilder>
        <MenuList />
      </SceneBuilder>
      {/* </View> */}
    </ScrollView>
  );
};

export default OrderScene;
