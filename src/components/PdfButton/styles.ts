import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    marginTop: 38,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: theme.fonts.text400,
    fontSize: 16,
  },
});
