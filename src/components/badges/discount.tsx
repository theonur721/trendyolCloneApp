import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';

const Discount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon size={20} name="bag-add" color={COLORS.ORANGE} />
      <Text style={styles.text}>BOGO 50%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE6E1',
    width: '30%',
    padding: 2,
  },
  text: {
    color: COLORS.BLACK,
    fontSize: 12,
    fontWeight: 'semibold',
    marginTop: 5,
  },
});

export default Discount;
