import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const ProfileScreen: React.FC = () => {
  const {token} = useSelector((state: RootState) => state.auth);
  return (
    <View>
      <Text>{token}</Text>
    </View>
  );
};

export default ProfileScreen;
