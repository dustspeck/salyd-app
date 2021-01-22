import React from 'react';
import {ScrollView, Text} from 'react-native';

import {SceneBuilder} from '../../components/Shared';

const ProfileScene = () => {
  return (
    <SceneBuilder>
      <ScrollView>
        <Text>Profile Scene</Text>
      </ScrollView>
    </SceneBuilder>
  );
};

export default ProfileScene;
