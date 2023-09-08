import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {Wrapper} from './styles';
import {Title} from '../Title';
import {variantType, variants} from '../../Utils/Mocks/buttonVarients';
export interface IButtonProps extends TouchableOpacityProps {
  height?: 'small' | 'large';
  width?: 'small-126' | 'medium-155' | 'large-311';
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'PrimaryLight';
  title: string;
  bold?: boolean;
  semiBold?: boolean;
}

export const Button = ({
  width = 'medium-155',
  height = 'large',
  variant = 'primary',
  bold = false,
  semiBold = false,
  children,
  title,
  isLoading,
  ...rest
}: IButtonProps) => {
  const variantKey: variantType = variants[variant];

  const btnSize = () => {
    if (width === 'large-311') {
      return 311;
    } else if (width === 'small-126') {
      return 126;
    } else {
      return 155;
    }
  };

  return (
    <Wrapper
      width={btnSize()}
      height={height}
      bg={variantKey.backgroundColor}
      border={variantKey.BorderColor}
      borderWidth={variantKey.BorderWidht}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size={25} color="#FFF" />
      ) : (
        <Title color={variantKey.color}>{title}</Title>
      )}
    </Wrapper>
  );
};
