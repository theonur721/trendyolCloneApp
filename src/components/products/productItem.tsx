import React from 'react';
import {Text, Image, Pressable, StyleSheet} from 'react-native';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constant';
import {COLORS} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL)}
      style={styles.container}>
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
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    minHeight: height * 0.25,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
export default ProductItem;
