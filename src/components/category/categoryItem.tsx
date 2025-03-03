import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {categoryItemProps} from '../../models/ui/categoryItemProps';
import {COLORS} from '../../theme/colors';

const CategoryItem: React.FC<categoryItemProps> = ({category}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={{fontSize: 16}}>{category}</Text>
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
  },
});

export default CategoryItem;
