import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import WidgetsHeader from '../components/widgets/widgetsHeader';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import ProductItem from '../components/products/productItem';
import {getPopularProducts} from '../store/actions/productsActions';

const PopularProducts: React.FC = () => {
  const popularProducts = useSelector(
    (state: RootState) => state.products.popularProducts,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);
  return (
    <View>
      <WidgetsHeader title="Most Popular Products" />
      <FlatList
        horizontal
        data={popularProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default PopularProducts;
