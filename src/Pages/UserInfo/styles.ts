import styled from 'styled-components/native';

export const Conteiner = styled.View`
  flex: 1;
  align-items: center;
`;

export const PinContainer = styled.View`
  height: 100px;
  width: 90%;
  align-items: center;
`;

export const Box = styled.View`
  /* flex: 1; */
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Change = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.BLACK};
`;
