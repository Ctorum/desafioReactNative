import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 22,
  },
  icon: {
    paddingRight: 10,
    borderRightWidth: 0.5,
    borderColor: theme.colors.highlight,
  },
  input: {
    paddingHorizontal: 10,
    fontFamily: theme.fonts.lowerText300,
    width: '100%',
  },
});
