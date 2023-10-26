import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../Styles/Theme/ligth';
import {useTheme} from 'styled-components';

interface IActivityIndicatorProps {
  size?: number;
  color?: keyof ThemeColors;
}

export const ActivityIndicator = ({
  size = 25,
  color = 'PRIMARY_CONTRAST',
}: IActivityIndicatorProps) => {
  const {COLORS} = useTheme();
  return <RNActivityIndicator size={size} color={COLORS[color]} />;
};
