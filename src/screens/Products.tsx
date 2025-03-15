import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {RootState, AppDispatch} from '../store';
import ProductItem from '../components/products/productItem';
import {getAllProducts} from '../store/actions/productsActions';
import Categories from '../widgets/categories';
import {COLORS} from '../theme/colors';

const ProductsList: React.FC<Props> = ({navigation, route}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {products, pending, error} = useSelector(
    (state: RootState) => state.products,
  );
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );

  useEffect(() => {
    dispatch(getAllProducts({category: selectedCategory}))
      .unwrap()
      .then(data => {})
      .catch(error => {});
  }, [selectedCategory, dispatch]);

  return (
    <View style={defaultScreenStyle.container}>
      {products.length === 0 ? (
        <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
          No Products Found
        </Text>
      ) : (
        <>
          <Categories />
          {pending ? (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator size={'large'} color={COLORS.ORANGE} />
            </View>
          ) : (
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
                <Text
                  style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
                  No Products Found
                </Text>
              }
            />
          )}
        </>
      )}
    </View>
  );
};

export default ProductsList;
