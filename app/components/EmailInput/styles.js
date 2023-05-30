import { StyleSheet } from 'react-native';
import { THEME } from '@/constants/theme';

export default StyleSheet.create({
  input: {
    backgroundColor: THEME.transparentWhite,
    marginTop: 4,
  },
  inputOutline: {
    borderRadius: 10,
  },
  inputActive: {
    backgroundColor: THEME.white,
    marginTop: 4,
  },
  errorText: {
    color: THEME.error,
    textAlign: 'left',
    marginLeft: 10,
  },
});
