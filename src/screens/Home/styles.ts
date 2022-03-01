import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: getStatusBarHeight() + 26,
    marginLeft: 26,
  },
  icon: {
    margin: 0,
    marginRight: 12,
  },
  headerText: {
    fontFamily: theme.fonts.lowerText300,
    fontSize: 18,
  },
  content: {
    width: '100%',
  },
});
