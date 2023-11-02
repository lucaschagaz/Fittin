import React from 'react';
import {Image, Wrapper} from './styles';
import {TouchableOpacityProps} from 'react-native';
import {ThemeColors} from '../../Styles/Theme/ligth';

interface IAvatarProps extends TouchableOpacityProps {
  img?: string;
  size?: number;
  sex?: 'man' | 'woman';
  borderColor?: keyof ThemeColors;
}

export const Avatar = ({
  img,
  size,
  sex = 'man',
  style,
  borderColor,
  ...rest
}: IAvatarProps) => {
  return (
    <Wrapper
      {...rest}
      size={size}
      borderColor={borderColor}
      style={[{elevation: 5}, style]}>
      {img ? (
        <Image size={size} source={{uri: img}} />
      ) : sex == 'man' ? (
        <Image size={size} source={require('../../assets/images/man.png')} />
      ) : (
        <Image size={size} source={require('../../assets/images/woman.png')} />
      )}
    </Wrapper>
  );
};
