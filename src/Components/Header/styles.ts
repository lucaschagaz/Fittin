import styled from 'styled-components/native';

interface IHeaderProps {
  align?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
}

export const HeaderContainer = styled.View<IHeaderProps>`
  align-items: ${({align}) => (align ? align : 'center')};
  justify-content: ${({justify}) => (justify ? justify : 'space-between')};
  min-height: 15%;
  width: 100%;
  padding: 10px 5px;
  flex-direction: ${({direction}) => (direction ? direction : 'column')};
`;
