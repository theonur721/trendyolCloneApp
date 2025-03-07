import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = RouteType<'ProductList'>;

const ProductsList: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Products</Text>
    </SafeAreaView>
  );
};

export default ProductsList;
