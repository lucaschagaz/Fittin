import styled from 'styled-components/native';

type IButtonProps = {
  width?: number;
  height?: 'small' | 'large';
  bg?: string;
  border?: string;
  borderWidth: number;
};

export const Wrapper = styled.TouchableOpacity<IButtonProps>`
  width: ${({width}) => (width ? width : 311)}px;
  height: ${({height}) => (height == 'large' ? 50 : 38)}px;
  background-color: ${({theme, bg}) =>
    bg ? theme.COLORS[bg] : theme.COLORS.PRIMARY};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  border-width: ${({borderWidth}) => (borderWidth ? borderWidth : 0)}px;
  border-color: ${({theme, border}) =>
    border ? theme.COLORS[border] : 'transparent'};
`;
