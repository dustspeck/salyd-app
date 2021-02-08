import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  Button,
  Dimensions,
  RefreshControl,
} from 'react-native';

import {SceneBuilder, Header} from '../../../components/Shared';
import DineHistory from '../../../components/History/DineHistory';

const {width, height} = Dimensions.get('screen');

const HistoryScene = ({navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [blink, setBlink] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setBlink(!blink);
    setIsRefreshing(false);
  };

  return (
    <SceneBuilder>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }>
        <Header navigation={navigation} isBack heading="DINE HISTORY" />
        {/* This is a wark around */}
        <DineHistory blink={blink} count={6} />
        {/* TODO: IMPLEMENT LAZY LOAD  */}
      </ScrollView>
    </SceneBuilder>
  );
};

export default HistoryScene;
