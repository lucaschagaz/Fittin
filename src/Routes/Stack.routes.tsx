import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  Testing,
  OnBoarding,
  ForgotPassWord,
  Register,
  OTPCode,
  ChooseSex,
  Age,
  MeasurementsWeight,
  MeasurementsHeight,
} from '../Pages';
import Home from '../Pages/Home';
const Stack = createNativeStackNavigator();

export default function Stackroutes() {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MeasurementsWeight">
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassword" component={ForgotPassWord} />
      <Screen name="OTPCode" component={OTPCode} />
      <Screen name="Home" component={Home} />
      <Screen name="ChooseSex" component={ChooseSex} />
      <Screen name="MeasurementsHeight" component={MeasurementsHeight} />
      <Screen name="MeasurementsWeight" component={MeasurementsWeight} />
      <Screen name="Age" component={Age} />
    </Navigator>
  );
}
