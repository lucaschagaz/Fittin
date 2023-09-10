import styled from 'styled-components/native';

type ITextProps = {
  size?: number;
  color?: string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
};

export const Text = styled.Text<ITextProps>`
  font-size: ${({size}) => (size ? size : 18)}px;
  color: ${({theme, color}) =>
    color ? theme.COLORS[color] : theme.COLORS.BLACK};
  text-align: center;
  margin-top: ${({mt}) => (mt ? mt : 0)}px;
  margin-left: ${({ml}) => (ml ? ml : 0)}px;
  margin-bottom: ${({mb}) => (mb ? mb : 0)}px;
  margin-right: ${({mr}) => (mr ? mr : 0)}px;
`;
