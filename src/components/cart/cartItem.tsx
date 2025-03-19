import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartItemProps} from '../../models/ui/cartItemProps';
import {height, width} from '../../utils/constant';
import {COLORS} from '../../theme/colors';
import FreeShipping from '../badges/freeShipping';
import Discount from '../badges/discount';
import Delivery from '../badges/delivery';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';
import Counter from './counter';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {removeFromCart} from '../../store/slice/cartSlice';

const CartItem: React.FC<CartItemProps> = ({product}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL, {
          productId: product.id,
        })
      }
      style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={{flex: 3, paddingHorizontal: 10, marginLeft: 10}}>
        <View>
          <Text style={styles.fontsize}>{product?.title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
            width: '75%',
          }}>
          <FreeShipping />
          <Discount />
          <Delivery />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Counter product={product} quantity={product.quantity} />
            <TouchableOpacity
              onPress={() => dispatch(removeFromCart(product.id))}
              style={{marginHorizontal: 10}}>
              <Icon name="trash" size={24} color={COLORS.RED} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.price}>{product?.price} TL</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.2,
    height: height * 0.11,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.GRAY,
    paddingVertical: 10,
  },
  fontsize: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.ORANGE,
    marginHorizontal: 10,
  },
});

export default CartItem;
