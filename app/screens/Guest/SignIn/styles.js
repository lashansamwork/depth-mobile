import { StyleSheet } from 'react-native';
import { THEME } from '@/constants/theme';

export default StyleSheet.create({
  input: {
    backgroundColor: THEME.transparentWhite,
    marginTop: 20,
  },
  inputOutline: {
    borderRadius: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inputActive: {
    backgroundColor: THEME.white,
    marginTop: 20,
  },
});
