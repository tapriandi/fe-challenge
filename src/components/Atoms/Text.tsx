import React, {FC, ReactNode, useMemo} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {FONTS} from '../../constant';

interface TextProps {
  style?: TextStyle;
  size?: number;
  bold?: boolean;
  color?: string;
  children: ReactNode;
  lineThrough?: boolean;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'tail' | 'middle' | 'clip' | undefined;
}

const Text: FC<TextProps> = ({
  style,
  size,
  bold,
  color,
  children,
  lineThrough,
  numberOfLines,
  ellipsizeMode,
  ...rest
}) => {
  const textStyle = useMemo<TextStyle>(
    () => ({
      fontSize: size,
      color,
      textDecorationStyle: 'solid',
      textDecorationLine: lineThrough ? 'line-through' : 'none',
      ...(bold && {fontWeight: 'bold', fontFamily: FONTS.SEMI_BOLD}),
    }),
    [size, bold],
  );

  return (
    <RNText
      {...rest}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={[textStyle, style]}>
      {children}
    </RNText>
  );
};

export default Text;
