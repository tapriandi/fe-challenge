import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeft = ({width = 20, height = 20, fill = '#111111'}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5303 5.46967C12.8232 5.76256 12.8232 6.23744 12.5303 6.53033L7.81066 11.25H18.5C18.9142 11.25 19.25 11.5858 19.25 12C19.25 12.4142 18.9142 12.75 18.5 12.75H7.81066L12.5303 17.4697C12.8232 17.7626 12.8232 18.2374 12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L11.4697 5.46967C11.7626 5.17678 12.2374 5.17678 12.5303 5.46967Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ArrowLeft;
