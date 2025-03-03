import React from 'react';
import {View, Text} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';

type Props = RouteType<'PopularProducts'>;

const PopularProducts: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <WidgetsHeader title="Most Popular Products" />
      <Text>PopularProducts</Text>
    </View>
  );
};

export default PopularProducts;
