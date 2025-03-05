import {StyleSheet, TextStyle} from 'react-native';

type Style = {
  categoryList: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  categoryList: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
