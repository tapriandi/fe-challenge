import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  FPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/Responsive';

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
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: FPercentage(2.2),
    fontWeight: 'bold',
  },
});
