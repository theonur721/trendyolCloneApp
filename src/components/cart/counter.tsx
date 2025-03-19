import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CounterProps} from '../../models/ui/counterProps';
import {COLORS} from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  updateQuantity,
} from '../../store/slice/cartSlice';

const Counter: React.FC<CounterProps> = ({quantity, product}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(decreaseQuantity(product))}>
        <Icon name="remove" size={20} color={COLORS.BLACK} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(increaseQuantity(product))}>
        <Icon name="add" size={20} color={COLORS.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    borderRadius: 100,
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textContainer: {
    backgroundColor: COLORS.PINK,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default Counter;
