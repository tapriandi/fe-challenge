import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  FPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/Responsive';
import {COLORS} from '../../../constant';

type Style = {
  container: ViewStyle;
  headerTitle: TextStyle;
  cartIconContainer: TextStyle;
  cartBadge: TextStyle;
  cartBadgeText: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: widthPercentage('5%'),
    paddingVertical: heightPercentage('1.8%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: FPercentage(5),
  },
  cartIconContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
