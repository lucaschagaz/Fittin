import React from 'react';
import {Image, Wrapper} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface IAvatarProps extends TouchableOpacityProps {
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
        <Image source={require('../../assets/man.png')} />
      ) : (
        <Image source={require('../../assets/woman.png')} />
      )}
    </Wrapper>
  );
};
