import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCategories} from '../store/actions/categoriesActions';

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  console.log(categories);
  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
