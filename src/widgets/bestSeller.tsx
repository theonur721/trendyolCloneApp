import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getBestSellerProducts} from '../store/actions/productsActions';
import type {RootState} from '../store/index';
import ProductItem from '../components/products/productItem';
const BestSeller: React.FC = () => {
  const bestSellerProducts = useSelector(
    (state: RootState) => state.products.bestSellerProducts,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestSellerProducts());
  }, []);
  return (
    <View style={styles.container}>
      <WidgetsHeader title="Best Selling Products" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={bestSellerProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default BestSeller;
