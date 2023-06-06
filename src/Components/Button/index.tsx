import React from 'react';
import {Container} from './styles';

export type IButtonProps = {
  width?: number;
  height?: number;
  bg?: string;
  children: React.ReactNode;
};

export default function Button({width, height, bg, children}: IButtonProps) {
  return (
    <Container width={width} height={height} bg={bg}>
      {children}
    </Container>
  );
}
