import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/ProfileScreen';
import {ROUTES} from '../utils/routes';
import {COLORS} from '../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons'; // İkonları import ediyoruz
import HeaderRight from './HeaderRight'; // HeaderRight bileşenini import ettik

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
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} /> // Home ikonu
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search-outline" color={color} size={size} /> // Search ikonu
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart-outline" color={color} size={size} /> // Favorites ikonu
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart-outline" color={color} size={size} /> // Cart ikonu
          ),
          headerRight: () => <HeaderRight />, // HeaderRight bileşenini ekledik
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-outline" color={color} size={size} /> // Profile ikonu
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.TAB} component={BottomTab} />
    </Stack.Navigator>
  );
};

export default Navigation;
