import styled from 'styled-components/native';

type IButtonProps = {
  width?: number;
  height?: number;
  bg?: string;
};

export const Container = styled.TouchableOpacity<IButtonProps>`
  width: ${({width}) => (width ? width : 100)}%;
  height: ${({height}) => (height ? height : 60)}px;
  background-color: ${({theme, bg}) =>
    bg ? theme.COLORS[bg] : theme.COLORS.PRIMARY};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;
