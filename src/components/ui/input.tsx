import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {InputProps} from '../../models/ui/inputProps';

const Input: React.FC<InputProps> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={`please enter the ${title}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
});

export default Input;
