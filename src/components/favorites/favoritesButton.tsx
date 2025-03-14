import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';
import {width} from '../../utils/constant';
import {ProductItemProps} from '../../models/ui/productItemProps';

const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name={product.isFavorited ? 'heart' : 'heart-outline'}
        size={20}
        color={COLORS.ORANGE}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.07,
    height: width * 0.07,
    position: 'absolute',
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    right: 5,
    top: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.33,
    shadowRadius: 13.97,
    elevation: 21,
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
  },
});

export default FavoritesButton;
