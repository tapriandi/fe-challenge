import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  FPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/Responsive';
import { COLORS } from '../../../constant';

type Style = {
  container: ViewStyle;
  headerTitle: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: widthPercentage('5%'),
    paddingVertical: heightPercentage('1.8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: FPercentage(5),
  },
});
