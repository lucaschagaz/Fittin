import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {Wrapper} from './styles';
import {Text} from '../index';
import {variants, variant} from '../../Utils/Mocks/Varients';
export interface IButtonProps extends TouchableOpacityProps {
  height?: 'small' | 'large';
  width?: 'small-126' | 'medium-155' | 'large-311';
  isLoading?: boolean;
  variant?: variant;
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
  const variantUsed = variants[variant];

  const btnSize = () => {
    if (width === 'large-311') {
      return 311;
    } else if (width === 'small-126') {
      return 126;
    } else {
      return 155;
    }
  };

  console.log(variantUsed);

  return (
    <Wrapper
      width={btnSize()}
      height={height}
      bg={variantUsed.backgroundColor}
      border={variantUsed.borderColor}
      borderWidth={variantUsed.borderWidth}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size={25} color="#FFF" />
      ) : (
        <Text
          bold={bold}
          font={'Button_Text'}
          color={bold ? 'BLACK' : variantUsed.color}>
          {title}
        </Text>
      )}
    </Wrapper>
  );
};
