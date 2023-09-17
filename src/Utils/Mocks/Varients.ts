import {ViewStyle} from 'react-native';
import {ThemeColors} from '../../Styles/Theme/ligth';

export type variant = 'primary' | 'secondary' | 'disable_Button';

type combineStyles = ViewStyle & {
  color: keyof ThemeColors;
  backgroundColor?: keyof ThemeColors;
  borderColor: keyof ThemeColors;
};

export const variants: Record<variant, combineStyles> = {
  primary: {
    backgroundColor: 'PRIMARY',
    color: 'PRIMARY_CONTRAST',
    borderColor: 'PRIMARY',
    borderWidth: 0,
  },
  disable_Button: {
    backgroundColor: 'GRAY_100',
    color: 'GRAY_Light',
    borderColor: 'TRANSPARENT',
    borderWidth: 0,
  },
  secondary: {
    backgroundColor: 'TRANSPARENT',
    color: 'GRAY',
    borderColor: 'GRAY',
    borderWidth: 1,
  },
};
