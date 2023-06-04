import styled from 'styled-components/native';

type IConteinerProps = {
  pd?: number;
  space?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  align: 'center' | 'flex-start' | 'flex-end';
};

export const Conteiner = styled.View<IConteinerProps>`
  flex: 1;
  padding: 20px ${({pd}) => (pd ? pd : 10)}px;
  justify-content: ${({space}) => (space ? space : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'center')};
`;
