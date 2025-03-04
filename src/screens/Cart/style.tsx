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
    borderRadius: 10,
    marginHorizontal: widthPercentage(3),
    marginBottom: widthPercentage(3),
    padding: widthPercentage(2),
    backgroundColor: COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.51,
    elevation: 2,
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
