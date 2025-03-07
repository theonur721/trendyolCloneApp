import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = RouteType<'ProductDetail'>;

const ProductDetail: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Product Detail</Text>
    </SafeAreaView>
  );
};

export default ProductDetail;
