import React from 'react';
import {Text, Image, Pressable, StyleSheet} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constant';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{
          width: width * 0.25,
          height: height * 0.15,
          resizeMode: 'contain',
        }}
      />
      <Text numberOfLines={2} style={{fontSize: 18}}>
        {product.title}{' '}
      </Text>
      <Text numberOfLines={2} style={{fontSize: 18}}>
        {product.price}{' '}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
  },
});
export default ProductItem;
