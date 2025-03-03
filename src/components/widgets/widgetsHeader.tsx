import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widgetHeaderProps} from '../../models/ui/widgetProps';

const WidgetsHeader: React.FC<widgetHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default WidgetsHeader;
