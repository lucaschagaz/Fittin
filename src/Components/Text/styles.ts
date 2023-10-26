import styled from 'styled-components/native';
import {ThemeColors} from '../../Styles/Theme/ligth';

interface ITextProps {
  color?: keyof ThemeColors;
}

export const RNText = styled.Text<ITextProps>`
  color: ${({theme, color}) =>
    color ? theme.COLORS[color] : theme.COLORS.BLACK};
`;
