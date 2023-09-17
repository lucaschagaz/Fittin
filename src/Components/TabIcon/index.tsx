import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {Text} from '../Text';

import {Wrapper} from './styles';

interface ITabBarIconProps {
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
}: ITabBarIconProps) => {
  return (
    <Wrapper>
      <Icon
        name={iconName}
        focused={focused}
        size={size ? size : 20}
        color={focused ? '#3447d4' : '#c3bfbf'}
      />
      <Text
        bold={focused ? true : false}
        font={focused ? 'SubTitle_one' : 'SubTitle_two'}>
        {screenName}
      </Text>
    </Wrapper>
  );
};
