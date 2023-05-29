import { StyleSheet } from 'react-native';
import { THEME } from '@/constants/theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: THEME.bg,
  },
  image: {
    width: null,
    height: 100,
    flex: 1,
  },
});
