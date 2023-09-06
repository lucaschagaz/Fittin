import React from 'react';
import {HeaderContainer} from './styles';

interface IHeaderProps {
  align?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  children?: React.ReactNode;
}

export const Header = ({
  children,
  align,
  justify,
  direction,
  ...rest
}: IHeaderProps) => {
  return (
    <HeaderContainer
      direction={direction}
      align={align}
      justify={justify}
      {...rest}>
      {children}
    </HeaderContainer>
  );
};
