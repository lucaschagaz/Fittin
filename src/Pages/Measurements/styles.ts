import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex: 1;
`;

export const Box = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Change = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.GRAY};
`;
