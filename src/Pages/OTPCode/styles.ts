import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput`
  width: 60px;
  height: 55px;
  font-size: 25px;
  padding: 10px;
  text-align: center;
  border-bottom-width: 3px;
`;
