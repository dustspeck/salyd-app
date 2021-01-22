import React from 'react';
import {ScrollView, Text} from 'react-native';

import {SceneBuilder} from '../../components/Shared';

const ScanScene = () => {
  return (
    <SceneBuilder>
      <ScrollView>
        <Text>Scan Scene</Text>
      </ScrollView>
    </SceneBuilder>
  );
};

export default ScanScene;
