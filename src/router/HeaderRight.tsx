import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Burayı doğru import ettik
import {COLORS} from '../theme/colors';

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Icon name="notifications-outline" size={30} color={COLORS.BLACK} />
      </Pressable>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    marginRight: 5,
  },
});
