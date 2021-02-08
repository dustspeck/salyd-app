import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {SceneBuilder, Header, Heading, ListIcon} from '../../components/Shared';
import {HOME} from '../../constants/strings';
import {GRAY, PRIMARY, ACCENT} from '../../constants/colors';

import ExploreSection from '../../components/Home/ExploreSection';
import RecentDines from '../../components/Home/RecentDines';

const {width, height} = Dimensions.get('screen');

const HomeScene = ({navigation}) => {
  return (
    <SceneBuilder>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <Header navigation={navigation} heading="HOME" />
        <Heading style={{width: width / 1.25, fontSize: width / 11}}>
          {HOME.HEADING}
        </Heading>

        <ExploreSection navigation={navigation} />

        <RecentDines count={2} navigation={navigation} />

        <View style={{height: height / 8}} />
      </ScrollView>
    </SceneBuilder>
  );
};

export default HomeScene;
