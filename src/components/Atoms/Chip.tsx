import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {COLORS} from '../../constant';
import { ReactNode } from 'react';

interface ChipProps {
  text: string | ReactNode;
  width?: number;
  height?: number;
  fontSize?: number;
  border?: boolean;
  backgroundColor?: string;
  color?: string;
  onPress?: () => void;
}

const Chip = ({
  text,
  width,
  height,
  fontSize,
  border = false,
  backgroundColor = 'transparent',
  color = 'black',
  onPress,
}: ChipProps) => {
  return (
    <TouchableOpacity
      style={[styles.chip, border && styles.border, {width, height, backgroundColor}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={{...styles.text, fontSize, color}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderRadius: 20,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Chip;
