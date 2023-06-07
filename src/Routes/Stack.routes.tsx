import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Testing,
  OnBoarding,
  ForgotPassWord,
  Register,
  OTPCode,
} from '../Pages';
const Stack = createNativeStackNavigator();

export default function Stackroutes() {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="OnBoarding" component={Testing} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassword" component={ForgotPassWord} />
      <Screen name="OTPCode" component={OTPCode} />
    </Navigator>
  );
}
