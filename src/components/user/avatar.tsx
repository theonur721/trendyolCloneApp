import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AvatarProps} from '../../models/ui/avatarProps';
import {COLORS} from '../../theme/colors';
import {getInitials} from '../../utils/functions';

const Avatar: React.FC<AvatarProps> = ({name, surname, size, image}) => {
  return (
    <View style={[styles.container, {width: size, height: size}]}>
      <Text style={styles.text}>{getInitials(name, surname)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Avatar;
