import React, {useEffect} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store/index';
import {getAllCategories} from '../store/actions/categoriesActions';
import CategoryItem from '../components/category/categoryItem';

const Categories: React.FC<Props> = ({navigation, route}) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({item}) => <CategoryItem category={item} />}
    />
  );
};

export default Categories;
