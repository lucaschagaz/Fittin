import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {Container} from './styles';

export interface IButtonProps extends TouchableOpacityProps {
  width?: number;
  height?: number;
  bg?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  width,
  height,
  bg,
  children,
  isLoading,
  ...rest
}: IButtonProps) {
  return (
    <Container width={width} height={height} bg={bg} {...rest}>
      {isLoading ? <ActivityIndicator size={25} color="#FFF" /> : children}
    </Container>
  );
}
