import {ImageStyle, StyleSheet, TextStyle} from 'react-native';
import {FPercentage, widthPercentage} from '../../utils/Responsive';
import {COLORS} from '../../constant';

type Style = {
  cartGroup: TextStyle;
  cartTitleGroup: TextStyle;
  cartTitle: TextStyle;
  cartImage: ImageStyle;
  buttonGroup: TextStyle;
  counter: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  cartGroup: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: widthPercentage(3),
    marginBottom: widthPercentage(3),
    padding: widthPercentage(2),
    borderColor: COLORS.BORDER,
  },
  cartTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTitle: {
    fontWeight: 'bold',
    paddingBottom: 4,
    color: COLORS.BLACK,
    fontSize: FPercentage(4),
  },
  cartImage: {
    width: 60,
    height: 60,
    marginEnd: widthPercentage(2),
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  counter: {
    textAlign: 'center',
    width: widthPercentage(10),
  },
});
