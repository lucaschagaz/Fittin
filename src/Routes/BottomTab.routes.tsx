import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarNavigatorParamList} from '../@types/navigation';

// TabBarScreenNavigationProp,
// import {useNavigation} from '@react-navigation/native';
// import {TabIcon} from '../Components';

import {Deits, Home, Insight, Profile, WorkOuts} from '../Pages';

const Tab = createBottomTabNavigator<TabBarNavigatorParamList>();

export const Tabroutes = () => {
  const {Navigator, Screen} = Tab;

  // const navigation = useNavigation<TabBarScreenNavigationProp>();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        options={{
          // tabBarIcon: ({focused}) => (
          //   <TabIcon
          //     iconName="house-chimney"
          //     focused={focused}
          //     size={20}
          //     screenName={'Home'}
          //     onPress={() => navigation.navigate('Home')}
          //   />
          // ),
          tabBarStyle: {paddingVertical: 5, elevation: 50},
          tabBarShowLabel: false,
          headerShown: false,
          headerStyle: {backgroundColor: '#FFFFFF'},
          headerTitleAlign: 'center',
        }}
        name={'Home'}
        component={Home}
      />
      <Screen
        options={{
          // tabBarIcon: ({focused}) => (
          //   <TabIcon
          //     iconName="dumbbell"
          //     focused={focused}
          //     size={20}
          //     screenName="Workout"
          //     onPress={() => navigation.navigate('Workout')}
          //   />
          // ),
          tabBarStyle: {paddingVertical: 5, elevation: 50},
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Workout"
        component={WorkOuts}
      />
      <Screen
        options={{
          // tabBarIcon: ({focused}) => (
          //   <TabIcon
          //     iconName="bowl-food"
          //     focused={focused}
          //     size={20}
          //     screenName="Deits"
          //     onPress={() => navigation.navigate('Diets')}
          //   />
          // ),
          tabBarStyle: {paddingVertical: 5, elevation: 50},
          tabBarShowLabel: false,
          headerShown: true,
          headerStyle: {backgroundColor: '#FFFFFF'},
          headerTitleAlign: 'center',
          headerTitle: 'Minha Dieta',
        }}
        name="Diets"
        component={Deits}
      />
      <Screen
        options={{
          // tabBarIcon: ({focused}) => (
          //   <TabIcon
          //     iconName="chart-pie"
          //     focused={focused}
          //     size={20}
          //     screenName="Metricas"
          //     onPress={() => navigation.navigate('Insights')}
          //   />
          // ),
          tabBarStyle: {paddingVertical: 5, elevation: 50},
          tabBarShowLabel: false,
          headerShown: true,
          headerStyle: {backgroundColor: '#FFFFFF'},
          headerTitleAlign: 'center',
          headerTitle: 'Estatisticas',
        }}
        name="Insights"
        component={Insight}
      />
      <Screen
        options={{
          // tabBarIcon: ({focused}) => (
          //   <TabIcon
          //     iconName="user"
          //     focused={focused}
          //     size={20}
          //     screenName="Perfil"
          //     onPress={() => navigation.navigate('Profile')}
          //   />
          // ),
          tabBarStyle: {paddingVertical: 5, elevation: 50},
          tabBarShowLabel: false,
          headerShown: true,
          headerStyle: {backgroundColor: '#FFFFFF'},
          headerTitleAlign: 'center',
          headerTitle: 'Minha Conta',
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );
};
