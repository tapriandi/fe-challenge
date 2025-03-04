import React, {FC, ReactNode} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {FONTS} from '../../constant';

interface TextProps {
  style?: TextStyle;
  size?: number;
  bold?: boolean;
  children: ReactNode;
  className?: string;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'tail' | 'middle' | 'clip' | undefined;
}

const Text: FC<TextProps> = props => {
  const {
    style,
    size,
    bold,
    children,
    className,
    numberOfLines,
    ellipsizeMode,
    ...rest
  } = props;

  const newStyle: any = {};

  if (size) {
    newStyle.fontSize = size;
  } else {
    newStyle.fontSize = 16;
  }
  if (bold) {
    newStyle.fontWeight = 'bold';
    newStyle.fontFamily = FONTS.SEMI_BOLD;
  }

  return (
    <RNText
      {...rest}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={[newStyle, style]}>
      {children}
    </RNText>
  );
};

export default Text;
