import {View, Text} from 'react-native';
import React from 'react';
import {Conteiner} from './styles';

type IContentProps = {
  children: React.ReactNode;
  pt?: number;
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
  pt,
  pb,
  pl,
  pr,
  children,
}: IContentProps) {
  return (
    <Conteiner space={space} align={align} pt={pt} pb={pb} pl={pl} pr={pr}>
      {children}
    </Conteiner>
  );
}
