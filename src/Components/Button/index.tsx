import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Text, ActivityIndicator} from '../index';
import {variants, variant} from '../../Utils/Mocks/Varients';

import {Wrapper} from './styles';
import {Box} from '../Box';
export interface IButtonProps extends TouchableOpacityProps {
  height?: 'small' | 'large';
  width?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  ButtonVariant?: variant;
  title: string;
  bold?: boolean;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
}

export const Button = ({
  width = 'medium',
  height = 'large',
  ButtonVariant = 'primary',
  bold = false,
  leftElement,
  rightElement,
  title,
  isLoading,
  ...rest
}: IButtonProps) => {
  const variantUsed = variants[ButtonVariant];

  const buttonSize = width === 'large' ? 100 : width === 'medium' ? 48 : 30;

  return (
    <Wrapper
      width={buttonSize}
      height={height}
      bg={variantUsed.backgroundColor}
      border={variantUsed.borderColor}
      borderWidth={variantUsed.borderWidth}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Box style={{flexDirection: 'row'}}>
          {leftElement && leftElement}
          <Text
            style={{marginHorizontal: 10}}
            font={'Button_Text'}
            color={bold ? 'BLACK' : variantUsed.color}>
            {title}
          </Text>
          {rightElement && rightElement}
        </Box>
      )}
    </Wrapper>
  );
};
