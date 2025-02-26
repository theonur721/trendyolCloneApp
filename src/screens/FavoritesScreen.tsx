import React from 'react';
import {View, Text} from 'react-native';

type Props = RouteType<'Favorites'>;
const FavoritesScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;
