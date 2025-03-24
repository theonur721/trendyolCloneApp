import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';

const Notifications: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <Text>Notifications</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});

export default Notifications;
