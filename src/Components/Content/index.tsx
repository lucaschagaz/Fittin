import React from 'react';
import {Conteiner} from './styles';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollView, View} from './ScreenComponent/ScreenComponent';
import {useTheme} from 'styled-components';

interface IContentProps {
  children: React.ReactNode;
  scrolable?: boolean;
}

export const Content = ({scrolable, children}: IContentProps) => {
  const Component = scrolable ? ScrollView : View;

  const {COLORS} = useTheme();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Component backgroundColor={COLORS.PRIMARY_CONTRAST}>
        <Conteiner style={{paddingHorizontal: 20}}>{children}</Conteiner>
      </Component>
    </KeyboardAvoidingView>
  );
};
