import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {requestDineHistory} from '../../utils/api';
import {GlobalContext} from '../../context/GlobalState';
import {Heading, Loader} from '../Shared';
import {ACCENT, GRAY} from '../../constants/colors';
import {ERROR} from '../../constants/strings';
import DineCard from './DineCard';

const {width, height} = Dimensions.get('screen');

const DineHistory = ({count = 2, blink, refresh}) => {
  const {token} = useContext(GlobalContext);

  const [recentOrders, setRecentOrders] = useState([]);
  const [renderOrders, setRenderOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDineHistory = async () => {
    setIsLoading(true);
    setRecentOrders(await requestDineHistory(token));
    setIsLoading(false);
  };

  useEffect(() => {
    getDineHistory();
  }, [blink]);

  useEffect(() => {
    if (recentOrders) {
      setRenderOrders(recentOrders.splice(0, count));
    } else {
      setRenderOrders(null);
    }
  }, [recentOrders]);

  return (
    <View style={{margin: 10}}>
      {isLoading && <Loader />}
      {!refresh && !isLoading && !blink && (
        <Text
          style={{
            textAlign: 'center',
            color: GRAY.T5,
            fontSize: width / 32,
            marginBottom: 10,
          }}>
          Pull down to refresh
        </Text>
      )}
      {renderOrders ? (
        renderOrders.map((data, i) => (
          <View key={data._id}>
            <DineCard data={data} />
            {i < renderOrders.length - 1 && (
              <View
                style={{
                  height: 2,
                  backgroundColor: GRAY.T6,
                  marginVertical: 10,
                }}
              />
            )}
          </View>
        ))
      ) : (
        <TouchableOpacity activeOpacity={0.75} onPress={getDineHistory}>
          <Text>{ERROR.NETWORK_RETRY}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DineHistory;
