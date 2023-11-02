import {TextInputProps} from 'react-native';
import React from 'react';
import {InputWrapper, InputFild} from './styles';

interface IInputProps extends TextInputProps {
  label: string;
  iconType?: string;
}

export const Input = ({label, style, ...rest}: IInputProps) => {
  return (
    <InputWrapper style={style}>
      <InputFild placeholder={label} {...rest} />
    </InputWrapper>
  );
};
