import React from 'react';
import {Text, Image, Pressable, StyleSheet, View} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constant';
import {COLORS} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';
import FavoritesButton from '../favorites/favoritesButton';
import Rate from './rate';
import FreeShipping from '../badges/freeShipping';
import Discount from '../badges/discount';
import Delivery from '../badges/delivery';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL, {
          productId: product.id,
        })
      }
      style={styles.container}>
      <FavoritesButton product={product} />
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.25,
          height: height * 0.15,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text numberOfLines={2} style={{fontSize: 16, marginVertical: 5}}>
        {product.title}{' '}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: COLORS.GRAY,
          fontWeight: 'bold',
          marginVertical: 5,
        }}>
        {product.category}
      </Text>
      {product.rating && (
        <Rate size="small" rating={{...product.rating, size: 'small'}} />
      )}

      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          color: COLORS.ORANGE,
          fontWeight: 'bold',
          marginVertical: 5,
        }}>
        {product.price}
        {' TL'}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 7,
        }}>
        <FreeShipping />
        <Discount />
        <Delivery />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    minHeight: height * 0.25,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    margin: 5,
  },
});

export default ProductItem;
