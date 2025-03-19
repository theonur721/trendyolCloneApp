import React from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import CartItem from '../components/cart/cartItem';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import Button from '../components/ui/button';
import {COLORS} from '../theme/colors';
import {height} from '../utils/constant';
import {addCart} from '../store/slice/cartSlice';

const CartScreen: React.FC = () => {
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={
            <Text style={styles.notyet}>No products yet...</Text>
          }
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
          contentContainerStyle={{paddingBottom: height * 0.12}}
        />
      </View>

      {cart?.length == 0 ? null : (
        <View style={styles.priceContainer}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.price}>{totalPrice.toFixed(2)} TL</Text>
            <Text style={styles.free}>Free shipping</Text>
          </View>
          <View style={{flex: 1}}>
            <Button
              title="Confirm Cart"
              onPress={() => useDispatch(addCart(product))}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    borderTopWidth: 0.5,
    borderColor: COLORS.GRAY,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },

  price: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    marginTop: 5,
  },
  total: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  free: {
    fontSize: 14,
    color: COLORS.GREEN,
    padding: 5,
    fontWeight: '500',
  },
  notyet: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CartScreen;
