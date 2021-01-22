import React from 'react';
import {ScrollView, Text} from 'react-native';

import {SceneBuilder} from '../../components/Shared';

const HistoryScene = () => {
  return (
    <SceneBuilder>
      <ScrollView>
        <Text>History Scene</Text>
      </ScrollView>
    </SceneBuilder>
  );
};

export default HistoryScene;
