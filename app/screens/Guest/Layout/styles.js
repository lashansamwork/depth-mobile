import { StyleSheet } from 'react-native';
import { THEME } from '@/constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: '33%',
  },
  logoText: {
    fontFamily: 'Inter-Black',
    fontSize: 50,
    color: THEME.offBlack,
  },
});
