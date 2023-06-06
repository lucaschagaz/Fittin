import {View, Text} from 'react-native';
import React from 'react';
import {HeaderContainer} from './styles';

type IHeaderProps = {
  children: React.ReactNode;
};

export default function Header({children}: IHeaderProps) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
