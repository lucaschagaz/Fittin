import React from 'react';
import {Text} from './styles';

type ITextProps = {
  size?: number;
  color?: string;
  weight?: 'normal' | 'bold' | 'bolder';
  children: string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};

export const Title = ({
  size,
  color,
  weight,
  mb,
  mt,
  mr,
  ml,
  children,
}: ITextProps) => {
  return (
    <Text
      color={color}
      weight={weight}
      size={size}
      mb={mb}
      mr={mr}
      ml={ml}
      mt={mt}>
      {children}
    </Text>
  );
};
