import styled from 'styled-components/native';

export const InputBox = styled.View`
  width: 95%;
  padding: 0px 15px;
  height: 50px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_100};
  border-radius: 20px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputFild = styled.TextInput`
  font-size: 18px;
  width: 100%;
`;
