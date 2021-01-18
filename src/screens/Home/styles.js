import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  },

  bottom: {
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: DarkTheme.colors.background,
  },
});
