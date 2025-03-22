import React from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import ProductItem from '../components/products/productItem';

const FavoritesScreen: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={favorites}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
