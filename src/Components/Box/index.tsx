import React from 'react';
import {Wrapper} from './styles';
import {ViewProps} from 'react-native';

interface IBoxProps extends ViewProps {
  children: React.ReactNode;
}

export const Box = ({children, style}: IBoxProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};
