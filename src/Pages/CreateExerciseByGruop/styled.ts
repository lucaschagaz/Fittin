import styled from 'styled-components/native';

export const AddButton = styled.TouchableOpacity`
  padding: 2px;
  border-width: 2px;
  border-color: ${({theme}) => theme.COLORS.PRIMARY};
  align-items: center;
  justify-content: center;
`;
