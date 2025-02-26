import React from 'react';
import {View, Text} from 'react-native';

type Props = RouteType<'Profile'>;

const ProfileScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
