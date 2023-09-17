import React from 'react';
import {TextProps, TextStyle} from 'react-native';
import {RNText} from './styles';
import {ThemeColors} from '../../Styles/Theme/ligth';

interface ITextProps extends TextProps {
  color?: keyof ThemeColors;
  children: string;
  font?: fontFamily;
  bold?: boolean;
}

type fontFamily =
  | 'Heading_one'
  | 'Heading_two'
  | 'Heading_three'
  | 'Paragraph'
  | 'SubTitle_one'
  | 'SubTitle_two'
  | 'Button_Text';

const $fontStyle: Record<fontFamily, TextStyle> = {
  Heading_one: {fontSize: 26, lineHeight: 60}, // sempre bold
  Heading_two: {fontSize: 22, lineHeight: 32},
  Heading_three: {fontSize: 19, lineHeight: 24},
  Paragraph: {fontSize: 19, lineHeight: 24},
  SubTitle_one: {fontSize: 16, lineHeight: 24},
  SubTitle_two: {fontSize: 12, lineHeight: 24},
  Button_Text: {fontSize: 18}, // sempre bold
};

const $fontFamily = {
  black: 'Satoshi-Black',
  bold: 'Satoshi-Bold',
  light: 'Satoshi-Light',
  medium: 'Satoshi-Medium',
  regular: 'Satoshi-Regular',
};

export const Text = ({
  color,
  font = 'Paragraph',
  style,
  bold = false,
  children,
}: ITextProps) => {
  const $fontUsed = $fontStyle[font];

  const getFontFamily = (familyVariant: fontFamily, bold?: boolean) => {
    if (bold) {
      return $fontFamily.bold;
    }

    switch (familyVariant) {
      case 'Heading_one':
        return $fontFamily.black;
        break;
      case 'Heading_two':
        return $fontFamily.bold;
        break;
      case 'Heading_three':
        return $fontFamily.medium;
        break;
      case 'Button_Text':
        return $fontFamily.bold;
        break;
      case 'SubTitle_one':
        return $fontFamily.medium;
        break;
      case 'SubTitle_two':
        return $fontFamily.medium;
        break;
      default:
        return $fontFamily.regular;
        break;
    }
  };

  return (
    <RNText
      color={color}
      style={[style, $fontUsed, {fontFamily: getFontFamily(font, bold)}]}>
      {children}
    </RNText>
  );
};
