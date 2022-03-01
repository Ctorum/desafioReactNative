import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 38,
    paddingHorizontal: 18,
    paddingVertical: 22,
    borderRadius: 18,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 20,
    marginTop: 26,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
  },
});

export const customInputstyles = StyleSheet.create({
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
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 22,
  },
});
