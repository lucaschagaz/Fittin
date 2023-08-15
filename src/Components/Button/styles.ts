import styled from 'styled-components/native';

type IButtonProps = {
  width?: number;
  height?: 'small' | 'large';
  bg?: string;
  variant?: 'primary' | 'secondary';
};

export const Container = styled.TouchableOpacity<IButtonProps>`
  width: ${({width}) => (width ? width : 100)}%;
  height: ${({height}) => (height == 'large' ? 50 : 38)}px;
  background-color: ${({theme, variant}) =>
    variant == 'primary' ? theme.COLORS.PRIMARY : 'transparent'};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  border-width: ${({variant}) => (variant !== 'primary' ? 2 : 0)}px;
  border-color: ${({theme, variant}) =>
    variant == 'secondary' && theme.COLORS.GRAYDARK};
`;
