import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../Pages/OnBoarding';

const Stack = createNativeStackNavigator();

export default function Stackroutes() {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="OnBoarding" component={OnBoarding} />
    </Navigator>
  );
}
