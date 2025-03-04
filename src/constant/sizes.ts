import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const SIZE = {
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  isAndroid: Platform.OS !== 'ios',
  isIphoneX: isIphoneX(),
  text: {
    h1: 48,
    h2: 40,
    h3: 36,
    h4: 28,
    h5: 24,
    h6: 18,
    body1: 16,
    body2: 14,
    caption1: 12,
    caption2: 11,
    caption3: 10,
    caption4: 8,
  },
};
