import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {Text} from '../Text';

import {Wrapper} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface ITabBarIconProps extends TouchableOpacityProps {
  iconName: string;
  focused: boolean;
  size?: number;
  screenName: string;
}

export const TabIcon = ({
  iconName,
  screenName,
  focused,
  size,
  ...rest
}: ITabBarIconProps) => {
  return (
    <Wrapper {...rest} activeOpacity={1}>
      <>
        <Icon
          name={iconName}
          focused={focused}
          size={size ? size : 20}
          color={focused ? '#3447d4' : '#c3bfbf'}
        />
        <Text bold={focused ? true : false} font="SubTitle_two">
          {screenName}
        </Text>
      </>
    </Wrapper>
  );
};
