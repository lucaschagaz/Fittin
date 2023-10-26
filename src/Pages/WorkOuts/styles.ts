import styled from 'styled-components/native';

export const CheckBox = styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  background-color: ${({theme}) => theme.COLORS.GRAY_Light};
  border-color: ${({theme}) => theme.COLORS.GRAY_100};
  border-width: 2px;
  margin-right: 5px;
`;
