import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  container: {
    padding: 10,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});

export {defaultScreenStyle};
