import React from 'react';
import {View, Text} from 'react-native';

type Props = RouteType<'Cart'>;

const CartScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;
