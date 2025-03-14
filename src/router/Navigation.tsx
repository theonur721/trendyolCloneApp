import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/ProfileScreen';
import {PRODUCTSNAVIGATOR, ROUTES} from '../utils/routes';
import {COLORS} from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderRight from './HeaderRight';
import ProductsList from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC<Props> = ({navigation, route}) => {
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
          tabBarBadge: 0,
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

const Navigation: React.FC<Props> = ({navigation, route}) => {
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
    </Stack.Navigator>
  );
};

export default Navigation;
