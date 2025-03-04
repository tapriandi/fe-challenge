import {ImageStyle, StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../../constant';
import {heightPercentage, widthPercentage} from '../../utils/Responsive';

type Style = {
  detailImage: ImageStyle;
  contentContainer: TextStyle;
  buttonContainer: TextStyle;
  button: TextStyle;
  buttonText: TextStyle;
  rows: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  detailImage: {
    width: widthPercentage(100),
    height: widthPercentage(100),
  },
  contentContainer: {
    padding: widthPercentage(5),
  },

  buttonContainer: {
    position: 'absolute',
    bottom: heightPercentage(0),
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: heightPercentage(2),
    paddingHorizontal: widthPercentage(10),
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
