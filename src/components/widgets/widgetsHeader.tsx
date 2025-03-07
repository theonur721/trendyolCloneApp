import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widgetHeaderProps} from '../../models/ui/widgetProps';

const WidgetsHeader: React.FC<widgetHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WidgetsHeader;
