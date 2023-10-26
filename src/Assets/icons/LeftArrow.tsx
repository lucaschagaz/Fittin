import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {useTheme} from 'styled-components';
import {IIconBaseProps} from '../../Components/Icon';

export const LeftArrow = ({size, color = 'BLACK'}: IIconBaseProps) => {
  const {COLORS} = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6 12H18M6 12L11 7M6 12L11 17"
        stroke={COLORS[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
