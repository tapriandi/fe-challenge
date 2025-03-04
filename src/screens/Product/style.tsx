import {ImageStyle, StyleSheet, TextStyle} from 'react-native';
import { COLORS } from '../../constant';
import { widthPercentage } from '../../utils/Responsive';

type Style = {
  cardProduct: TextStyle;
  cardPrices: TextStyle;
  rows: TextStyle;
  imageProduct: ImageStyle;
};

export const styles = StyleSheet.create<Style>({
  cardProduct: {
    width: widthPercentage(47),
    padding: 10,
    borderRadius: 5,
    marginBottom: widthPercentage(2),
    backgroundColor: COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.51,
    elevation: 2,
  },
  imageProduct: {
    width: '100%',
    height: widthPercentage(48),
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardPrices: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
