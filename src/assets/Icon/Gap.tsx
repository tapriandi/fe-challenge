import React, { FC } from 'react';
import { View } from 'react-native';

interface Props {
  height?: number | string;
  width?: number | string;
}

const Gap: FC<Props> = ({ height, width }) => {
  return <View style={{ height, width }} />;
};

export default Gap;
