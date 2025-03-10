import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {categoryItemProps} from '../../models/ui/categoryItemProps';
import {COLORS} from '../../theme/colors';
import {height} from '../../utils/constant';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setCategory} from '../../store/slice/categoriesSlice';

const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.selectedContainer
          : styles.unSelectedContainer,
      ]}>
      <Text
        style={[
          {fontSize: 16, fontWeight: 'bold'},
          selectedCategory == category
            ? styles.selectedTitle
            : styles.unSelectedTitle,
        ]}>
        {category}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 100,
    borderColor: COLORS.GRAY,
    maxHeight: height * 0.045,
  },
  selectedContainer: {
    backgroundColor: COLORS.ORANGE,
  },
  unSelectedContainer: {
    backgroundColor: COLORS.WHITE,
  },
  selectedTitle: {
    color: COLORS.WHITE,
  },
  unSelectedTitle: {
    color: COLORS.BLACK,
  },
});

export default CategoryItem;
