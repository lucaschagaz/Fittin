import styled from 'styled-components/native';

interface IDaysProps {
  width?: number;
}

export const DaysWrapper = styled.View<IDaysProps>`
  width: ${({width}) => (width ? width : '100%')};
  height: 20px;
  flex-direction: row;
`;

interface IDaysItemProps {
  widthItem?: number;
}

export const DayItem = styled.View<IDaysItemProps>`
  width: ${({widthItem}) => (widthItem ? widthItem : '14.2%')};
  height: 100%;
  align-items: center;
  justify-content: center;
`;
