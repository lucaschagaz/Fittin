import {View, Text} from 'react-native';
import React from 'react';
import {Conteiner} from './styles';

type IContentProps = {
  children: React.ReactNode;
  pd?: number;
  space?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end';
};

export default function Content({children, space, align, pd}: IContentProps) {
  return (
    <Conteiner space={space} align={align} pd={pd}>
      {children}
    </Conteiner>
  );
}
