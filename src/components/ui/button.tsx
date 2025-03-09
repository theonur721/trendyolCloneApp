import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height} from '../../utils/constant';

const Button: React.FC<Props> = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    minHeight: height * 0.05,
  },
  title: {
    fontSize: 18,
    color: COLORS.WHITE,
  },
});

export default Button;
