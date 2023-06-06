import {TextInputProps} from 'react-native';
import React from 'react';
import {InputBox, InputFild} from './styles';

import Icon from 'react-native-vector-icons';

interface IInputProps extends TextInputProps {
  label: string;
  iconType?: string;
}

export default function Input({label, iconType, ...rest}: IInputProps) {
  return (
    <InputBox>
      <InputFild placeholder={label} {...rest} />
      {/* {iconType ? <Icon name={iconType} size={20} /> : null} */}
    </InputBox>
  );
}
