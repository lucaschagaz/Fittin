import React from 'react';
import {Image, Wrapper} from './styles';

interface IAvatarProps {
  img?: string;
  sex?: 'man' | 'woman';
  borderColor?: 'GRAY' | 'PRIMARY';
}

export const Avatar = ({
  img,
  sex = 'man',
  borderColor = 'GRAY',
  ...rest
}: IAvatarProps) => {
  return (
    <Wrapper {...rest} borderColor={borderColor}>
      {img ? (
        <Image source={{uri: img}} />
      ) : sex == 'man' ? (
        <Image source={require('../../Assets/man.png')} />
      ) : (
        <Image source={require('../../Assets/woman.png')} />
      )}
    </Wrapper>
  );
};
