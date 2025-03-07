import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Categories from '../widgets/categories';
import {defaultScreenStyle} from '../styles/defaultScreenStyle';
import Introduction from '../widgets/introduction';
import BestSeller from '../widgets/bestSeller';
import PopularProducts from '../widgets/popularProducts';

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <Introduction />
          <BestSeller />
          <PopularProducts />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
