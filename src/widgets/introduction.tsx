import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {height, width} from '../utils/constant';

const Introduction: React.FC = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../assets/trendyol-1.jpg')}
        style={{
          width: width - 15,
          height: height * 0.2,
          resizeMode: 'stretch',
          borderRadius: 8,
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default Introduction;
