import {StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';
import {width} from '../../utils/constant';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {AUTHNAVIGATOR} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation();
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const chechLogin = () => {
    if (!isLogin) {
      Alert.alert('Login', 'Please log in before adding to favorites', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'login',
          onPress: () => navigation.navigate(AUTHNAVIGATOR.LOGIN),
        },
      ]);
    }
  };
  return (
    <TouchableOpacity onPress={chechLogin} style={styles.container}>
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
