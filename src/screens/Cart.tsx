import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import CartItem from '../components/cart/cartItem';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';

const CartScreen: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  console.log('sepetteki ürünler', cart);
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
