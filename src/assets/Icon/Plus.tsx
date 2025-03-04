import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const Plus = ({width = 18, height = 18, fill = '#868686'}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox={'0 0 18 18'} fill={'none'}>
      <Path
        d={'M9 3.75V14.25'}
        stroke={fill}
        strokeWidth={'1.5'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <Path
        d={'M3.75 9H14.25'}
        stroke={fill}
        strokeWidth={'1.5'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};

export default Plus;
