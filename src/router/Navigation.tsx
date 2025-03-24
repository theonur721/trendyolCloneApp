import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/ProfileScreen';
import {
  AUTHNAVIGATOR,
  NOTIFICATIONNAVIGATOR,
  PRODUCTSNAVIGATOR,
  ROUTES,
} from '../utils/routes';
import {COLORS} from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderRight from './HeaderRight';
import ProductsList from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkUser} from '../store/slice/authSlice';
import Notifications from '../screens/Notifications';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.ORANGE,
        tabBarInactiveTintColor: COLORS.BLACK,
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            /> // Focus durumuna göre ikon değişiyor
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              color={color}
              size={size}
            /> // Focus durumuna göre ikon değişiyor
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={size}
            /> // Focus durumuna göre ikon değişiyor
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              size={size}
            /> // Focus durumuna göre ikon değişiyor
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
          tabBarBadge: cart?.length,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            /> // Focus durumuna göre ikon değişiyor
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getState = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch(checkUser(token));
    }
  };

  useEffect(() => {
    getState();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{headerBackTitle: 'Back', headerTintColor: COLORS.BLACK}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.TAB}
        component={BottomTab}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTLIST}
        component={ProductsList}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={AUTHNAVIGATOR.LOGIN} component={Login} />
      <Stack.Screen
        name={NOTIFICATIONNAVIGATOR.NOTIFICATIONS}
        component={Notifications}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
