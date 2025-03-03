import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
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
    <View>
      <WidgetsHeader title="Best Selling Products" />
      <FlatList
        horizontal
        data={bestSellerProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default BestSeller;
