import styled from 'styled-components/native';

type IConteinerProps = {
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
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
  /* padding-top: ${({pt}) => (pt ? pt : 20)}px; */
  padding-bottom: ${({pb}) => (pb ? pb : 20)}px;
  padding-left: ${({pl}) => (pl ? pl : 10)}px;
  padding-right: ${({pr}) => (pr ? pr : 10)}px;
  justify-content: ${({space}) => (space ? space : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'center')};
`;
