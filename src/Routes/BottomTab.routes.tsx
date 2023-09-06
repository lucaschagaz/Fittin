import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import screens from '../Utils/Mocks/Screens';

import {TabIcon} from '../Components';

const Tab = createBottomTabNavigator();

export default function Tabroutes() {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator initialRouteName="Home">
      {screens.map(screen => (
        <Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon
                iconName={screen.name}
                focused={focused}
                size={20}
                screenName={screen.screenName}
              />
            ),
            tabBarStyle: {paddingVertical: 5, elevation: 50},
            tabBarShowLabel: false,
            headerShown: screen.screenName == 'Home' ? false : true,
            headerStyle: {backgroundColor: '#FFFFFF'},
            headerTitleAlign: 'center',
          }}
          name={screen.page}
          component={screen.screen}
        />
      ))}
    </Navigator>
  );
}
