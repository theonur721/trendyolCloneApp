import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {RootState, AppDispatch} from '../store';
import ProductItem from '../components/products/productItem';
import {getAllProducts} from '../store/actions/productsActions';
import Categories from '../widgets/categories';

type Props = RouteType<'ProductList'>;

const ProductsList: React.FC<Props> = ({navigation, route}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {products, loading, error} = useSelector(
    (state: RootState) => state.products,
  );
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );

  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
    dispatch(getAllProducts({category: selectedCategory}))
      .unwrap()
      .then(data => {})
      .catch(error => {});
  }, [selectedCategory, dispatch]);

  if (loading) {
    return (
      <View style={defaultScreenStyle.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={defaultScreenStyle.container}>
        <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
          Error: {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={defaultScreenStyle.container}>
      {products.length === 0 ? (
        <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
          No Products Found
        </Text>
      ) : (
        <>
          <Categories />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
            numColumns={2}
            data={products || []}
            keyExtractor={(item, index) =>
              item?.id ? `product-${item.id}` : `index-${index}`
            }
            renderItem={({item}) => <ProductItem product={item} />}
            ListEmptyComponent={
              <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
                No Products Found
              </Text>
            }
          />
        </>
      )}
    </View>
  );
};

export default ProductsList;
