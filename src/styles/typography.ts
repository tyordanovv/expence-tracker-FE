import { Platform } from 'react-native';
import { Fonts } from './';

export const h3 = {
  marginTop: 30,
  marginHorizontal: 0,
  marginBottom: 10,
  fontSize: 24,
  ...Fonts.poppinsMedium[Platform.OS],
};

export const h4 = {
  margin: 0,
  textTransform: 'uppercase',
  fontSize: 20,
  ...Fonts.poppinsMedium[Platform.OS],
};
