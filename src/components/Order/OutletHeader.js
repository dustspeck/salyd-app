import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import {GRAY, PRIMARY, TOPPINGS, ACCENT, LETTUCE} from '../../constants/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Heading, Badge} from '../Shared';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

const OutletHeader = ({
  yOffset,
  onParallaxImageScrolled,
  headingTint,
  setHeadingTint,
}) => {
  const data = {
    cover:
      'https://images.unsplash.com/photo-1571951753447-4841fa61ed5c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',
    title: 'Indian Food Hotel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Egestas integer eget aliquet nibh praesent. In dictum non consectetur a erat nam at lectus urna. Egestas integer eget aliquet nibh praesent.',
    address: 'Opposite Blood Bank, Near Railway Station, XYZ City',
  };

  const HEIGHT_FACTOR = 3;
  const [parallaxMultiplier, setParallaxMultiplier] = useState(1);
  const [parallaxOpacity, setParallaxOpacity] = useState(1);
  const [statusColor, setStatusColor] = useState('#0005');
  const [statusStyle, setStatusStyle] = useState('light-content');
  const [enlargeImage, setEnlargeImage] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    // console.log(yOffset);
    // console.log(yOffset / (height / (HEIGHT_FACTOR * parallaxMultiplier)));
    // console.log(headingTint);

    setParallaxMultiplier(yOffset != 0 ? 0.01 * yOffset + 1 : 1);
    setParallaxOpacity(
      1 - yOffset / (height / (HEIGHT_FACTOR * parallaxMultiplier) - 30),
    );
    if (yOffset / (height / (HEIGHT_FACTOR * parallaxMultiplier)) < 1) {
      setHeadingTint(
        255 * (1 - yOffset / (height / (HEIGHT_FACTOR * parallaxMultiplier))),
      );
    }

    if (yOffset + 30 > height / (HEIGHT_FACTOR * parallaxMultiplier)) {
      setStatusColor(GRAY.T2);
      setStatusStyle('dark-content');
      if (onParallaxImageScrolled) {
        onParallaxImageScrolled(true);
      }
    } else {
      setStatusColor('#0005');
      setStatusStyle('light-content');
      if (onParallaxImageScrolled) {
        onParallaxImageScrolled(false);
      }
    }
  }, [yOffset]);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={statusColor}
        barStyle={statusStyle}
      />
      <Modal
        visible={enlargeImage}
        animationType="fade"
        transparent
        statusBarTranslucent={true}
        onRequestClose={() => setEnlargeImage(false)}>
        <TouchableOpacity
          style={{backgroundColor: '#000'}}
          //   activeOpacity={0.75}
          onPress={() => {
            console.log('asd');
            setEnlargeImage(false);
          }}>
          <TouchableOpacity
            // activeOpacity={0.75}
            onPress={() => {
              console.log('asd');
              setEnlargeImage(false);
            }}>
            <Image
              source={{uri: data.cover}}
              style={{
                width,
                height,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => setEnlargeImage(true)}>
          <Image
            source={{uri: data.cover}}
            style={{
              width,
              height: height / (HEIGHT_FACTOR * parallaxMultiplier),
              opacity: parallaxOpacity,
            }}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            // top: height / (2 * HEIGHT_FACTOR * parallaxMultiplier),
            top: height / (2 * HEIGHT_FACTOR),
            opacity: parallaxOpacity,
          }}>
          <View style={{width}}>
            <Heading
              style={{
                fontSize: width / 13,
                // color: `rgb(${headingTint},${headingTint},${headingTint})`,
                color: 'white',
                textShadowColor: 'black',
                textShadowRadius: 30,
                textAlign: 'center',
              }}
              viewStyle={{margin: 10}}>
              Indian Food Hotel
            </Heading>
          </View>
        </View>
        <View style={{backgroundColor: GRAY.T2}}>
          <View style={{margin: 20, marginTop: 30}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 3,
                }}>
                <Badge icon="ellipse" text="Pure Veg" color={LETTUCE.T2} />
                <Badge
                  icon="shield-checkmark"
                  text="Safe Dining"
                  color={PRIMARY}
                />
                <Badge
                  icon="exit"
                  text="Pickup Available"
                  color={TOPPINGS.T5}
                />
                <Badge
                  icon="home"
                  text="Delivery Available"
                  color={TOPPINGS.T10}
                />
              </View>
            </ScrollView>
            <View style={{marginHorizontal: 5}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: width / 26,
                  color: GRAY.T5,
                  marginTop: 20,
                }}>
                Description
              </Text>
              <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                <Text style={{fontSize: width / 28}}>
                  {isReadMore
                    ? data.description.substr(0, 120)
                    : data.description}
                  {isReadMore && (
                    <Text style={{fontSize: width / 28, color: GRAY.T5}}>
                      ...Read more
                    </Text>
                  )}
                </Text>
              </TouchableOpacity>
              <Text
                style={{fontSize: width / 30, marginTop: 20, color: GRAY.T6}}>
                {data.address}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default OutletHeader;
