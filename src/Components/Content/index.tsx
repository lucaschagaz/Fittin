import {View, Text} from 'react-native';
import React from 'react';
import {Conteiner} from './styles';

type IContentProps = {
  children: React.ReactNode;
  pb?: number;
  pl?: number;
  pr?: number;
  space?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end';
};

export default function Content({
  space,
  align,
  pb,
  pl,
  pr,
  children,
}: IContentProps) {
  return (
    <Conteiner space={space} align={align} pb={pb} pl={pl} pr={pr}>
      {children}
    </Conteiner>
  );
}
