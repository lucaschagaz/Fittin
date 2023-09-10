import React from 'react';
import {TextProps} from 'react-native';
import {RNText} from './styles';

interface ITextProps extends TextProps {
  size?: number;
  color?: string;
  children: string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

export const Title = ({size, color, mb, mt, mr, ml, children}: ITextProps) => {
  return (
    <RNText color={color} size={size} mb={mb} mr={mr} ml={ml} mt={mt}>
      {children}
    </RNText>
  );
};
