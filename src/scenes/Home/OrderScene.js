import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {LEAVE_ORDER} from '../../constants/strings';
import OutletHero from '../../components/Order/OutletHero';
import {SceneBuilder, Header, Heading} from '../../components/Shared';
import {GRAY} from '../../constants/colors';
import MenuList from '../../components/Order/MenuList';
import OutletHeader from '../../components/Order/OutletHeader';

const {width, height} = Dimensions.get('screen');

// const data = [
//   {
//     id: 0,
//     name: 'Pav Bhaji (1 Plate)',
//     type: 0,
//     description:
//       'Leo vel orci porta non pulvinar neque laoreet. Sed blandit libero volutpat sed. Eu volutpat odio facilisis mauris. Pellentesque id nibh tortor id aliquet lectus.',
//     price: 45,
//     max: 3,
//   },
//   {
//     id: 1,
//     name: 'Egg Roll (Serves 1)',
//     type: 1,
//     description:
//       'Leo vel orci porta non pulvinar neque laoreet. Sed blandit libero volutpat sed. Eu volutpat odio facilisis mauris. Pellentesque id nibh tortor id aliquet lectus.',
//     price: 35,
//     max: 5,
//   },
//   {
//     id: 2,
//     name: 'Murgh Mussallam (4 pcs.)',
//     type: 2,
//     description:
//       'Leo vel orci porta non pulvinar neque laoreet. Sed blandit libero volutpat sed. Eu volutpat odio facilisis mauris. Pellentesque id nibh tortor id aliquet lectus.',
//     price: 175,
//     max: 4,
//   },
// ];

const OrderScene = ({navigation, route}) => {
  const {restro} = route.params;

  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headingTint, setHeadingTint] = useState(255);

  const handleOnScroll = (event) => {
    if (event.nativeEvent.contentOffset.y < height / 2) {
      setScrollYPosition(event.nativeEvent.contentOffset.y);
    }
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
      <OutletHero
        details={restro}
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
        <OutletHeader
          name={restro.name}
          headerColor={headerColor}
          handleBack={handleBack}
          headingTint={headingTint}
          hasScrolled={hasScrolled}
        />
      </View>

      <SceneBuilder>
        <MenuList data={restro.menu} />

        <View style={{height: height / 5}} />
      </SceneBuilder>
    </ScrollView>
  );
};

export default OrderScene;
