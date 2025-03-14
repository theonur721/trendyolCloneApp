import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../store/actions/productsActions';
import {RootState} from '../store';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {height, width} from '../utils/constant';
import {COLORS} from '../theme/colors';
import Button from '../components/ui/button';
import Rate from '../components/products/rate';
import FavoritesButton from '../components/favorites/favoritesButton';

type Props = RouteType<'ProductDetail'>;

const ProductDetail: React.FC<Props> = ({route}) => {
  const {productId} = route.params;

  const dispatch = useDispatch();
  const {product} = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, [productId]);

  return (
    <View style={defaultScreenStyle.container}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FavoritesButton product={product} />
          <Image source={{uri: product.image}} style={styles.image} />
          <Text style={styles.category}>{product?.category}</Text>
          <Text style={styles.title}>{product?.title}</Text>
          {product.rating && (
            <Rate size="large" rating={product.rating} showCount={true} />
          )}
          <Text style={styles.description}>{product?.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.priceContainer}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.price}>{product?.price} TL</Text>
          <Text style={styles.free}>Free shipping</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
  },
  category: {
    fontSize: 18,
    color: COLORS.ORANGE,
    fontWeight: 'bold',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    borderTopWidth: 0.5,
    borderColor: COLORS.GRAY,
    flexDirection: 'row',
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  price: {
    fontSize: 18,
    color: COLORS.ORANGE,
    fontWeight: 'bold',
    marginTop: 10,
  },
  free: {
    fontSize: 14,
    color: COLORS.GREEN,
    padding: 5,
    fontWeight: '500',
  },
});

export default ProductDetail;
