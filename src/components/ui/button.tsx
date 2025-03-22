import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {height} from '../../utils/constant';
import {ButtonProps} from '../../models/ui/buttonProps';

const Button: React.FC<ButtonProps> = props => {
  const {title, disabled, onPress} = props;
  return (
    <TouchableOpacity
      onPressIn={onPress}
      {...props}
      style={[
        styles.container,
        {backgroundColor: disabled ? COLORS.GRAY : COLORS.ORANGE},
      ]}>
      <Text style={styles.title}>{title}</Text>
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
