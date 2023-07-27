import React, {useState} from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {Container} from './styles';
import Title from '../Title';

export interface IButtonProps extends TouchableOpacityProps {
  height?: 'small' | 'large';
  width?: number;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
  title: string;
}

export default function Button({
  width,
  height = 'large',
  variant = 'primary',
  children,
  title,
  isLoading,
  ...rest
}: IButtonProps) {
  const textColor = variant == 'primary' ? 'TEXT' : 'BLACK';

  return (
    <Container width={width} height={height} variant={variant} {...rest}>
      {isLoading ? (
        <ActivityIndicator size={25} color="#FFF" />
      ) : (
        <Title color={textColor}>{title}</Title>
      )}
    </Container>
  );
}
