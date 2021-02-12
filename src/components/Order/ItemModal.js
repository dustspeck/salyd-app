import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import IMAGE from '../../assets/images/bg/login.webp';
import {ROUNDNESS} from '../../constants/theme';
import {GRAY} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const ItemModal = ({showModal, setShowModal, data, renderType}) => {
  const modalRef = useRef();
  const cardRef = useRef();

  const [bgOpacity, setBGOpacity] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      cardRef.current.measure((_ox, _oy, _w, h) => {
        setCardHeight(h);
      });
    }, 1);

    setTimeout(() => {
      let oH = height / 4 + 100;
      setOffsetHeight(oH);
      modalRef.current.scrollTo({
        y: oH,
        animated: true,
      });
    }, 100);
  }, []);

  const handleOnScroll = (event) => {
    if (event.nativeEvent.contentOffset.y <= 0) {
      setShowModal(false);
    } else {
      setBGOpacity(event.nativeEvent.contentOffset.y / height);
    }
  };

  const handleCloseTouch = () => {
    setTimeout(() => {
      modalRef.current.scrollTo({y: 0, animated: true});
    }, 100);
  };
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      animated
      visible={showModal}
      onRequestClose={handleCloseTouch}>
      <ScrollView
        nestedScrollEnabled={true}
        snapToOffsets={[offsetHeight]}
        ref={modalRef}
        onScroll={handleOnScroll}
        disableIntervalMomentum={true}
        snapToEnd={true}
        snapToStart={true}
        decelerationRate="fast">
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleCloseTouch}
          style={{
            minHeight: cardHeight + height,
            backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity activeOpacity={1}>
            <View
              ref={cardRef}
              style={{
                minHeight: height / 2,
                borderTopEndRadius: ROUNDNESS,
                borderTopStartRadius: ROUNDNESS,
                backgroundColor: GRAY.T2,
              }}>
              <View style={{width, alignItems: 'center'}}>
                <View
                  style={{
                    width: width / 8,
                    height: 3,
                    backgroundColor: GRAY.T4,
                    borderRadius: 3,
                    margin: 6,
                    marginBottom: 0,
                  }}
                />
                <Image
                  resizeMode="cover"
                  source={IMAGE}
                  style={{
                    margin: 10,
                    width: '90%',
                    height: height / 4,
                    borderRadius: ROUNDNESS,
                  }}
                />
                <Text
                  style={{
                    fontSize: width / 20,
                    width: '90%',
                    padding: 15,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {data.name}
                </Text>
                <Text
                  style={{
                    fontSize: width / 28,
                    width: '90%',
                    padding: 15,
                    paddingTop: 10,
                    color: GRAY.T5,
                  }}>
                  {data.description}
                  {data.description}
                  {data.description}
                </Text>
                <View
                  style={{
                    padding: 15,
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    {renderType(data.type)}
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        margin: 5,
                        color: GRAY.T6,
                        textAlignVertical: 'bottom',
                      }}>
                      {'₹'}
                    </Text>
                    <Text
                      style={{
                        fontSize: width / 22,
                        color: GRAY.T10,
                        fontWeight: 'bold',
                      }}>
                      {data.price}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

export default React.memo(ItemModal);
