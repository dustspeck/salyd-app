import React from 'react';
import {View, Text} from 'react-native';
import {ListItem} from '../Shared';

const OptionsList = (props) => {
  return (
    <>
      <View style={{width: '100%'}}>
        <ListItem
          icon="document-text-outline"
          text="Edit Profile"
          action={props.handleEditProfile}
        />
        <ListItem
          icon="time-outline"
          text="Dine History"
          action={props.handleDineHistory}
        />
        <ListItem
          icon="call-outline"
          text="Get Help"
          action={props.handleGetHelp}
        />
        <ListItem
          icon="exit-outline"
          text="Log Out"
          action={props.handleLogout}
        />
      </View>
    </>
  );
};

export default OptionsList;
