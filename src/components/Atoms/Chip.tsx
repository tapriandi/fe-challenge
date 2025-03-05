import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {COLORS} from '../../constant';
import {ReactNode, useMemo} from 'react';
import {widthPercentage} from '../../utils/Responsive';

interface ChipProps {
  text: string | ReactNode;
  size?: 'small' | 'medium' | 'large';
  isActive?: boolean;
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
  size = 'small',
  width,
  height,
  fontSize,
  isActive = false,
  border = false,
  backgroundColor,
  color,
  onPress,
}: ChipProps) => {
  const sizeStyles = useMemo(() => {
    return {
      small: {height: 30, fontSize: 12, paddingHorizontal: 10},
      medium: {height: 40, fontSize: 14, paddingHorizontal: 15},
      large: {height: 50, fontSize: 16, paddingHorizontal: 20},
    }[size];
  }, [size]);

  const chipStyles = useMemo(
    () => ({
      height: sizeStyles.height,
      backgroundColor: isActive
      ? backgroundColor || COLORS.GREEN
      : backgroundColor || COLORS.WHITE,
      borderColor: isActive ? COLORS.WHITE : COLORS.BORDER,
      width,
    }),
    [sizeStyles, isActive, backgroundColor],
  );

  const textColor = useMemo(
    () => (isActive ? color || COLORS.WHITE : color || COLORS.BLACK),
    [isActive, color],
  );

  return (
    <TouchableOpacity
      style={[styles.chip, border && styles.border, chipStyles]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={{...styles.text, fontSize, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: widthPercentage(2),
  },
  border: {
    borderRadius: 20,
    borderColor: COLORS.BORDER,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingHorizontal: widthPercentage(3),
  },
});

export default Chip;
