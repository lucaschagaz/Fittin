import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Login,
  OnBoarding,
  ForgotPassWord,
  Register,
  OTPCode,
  ChooseSex,
  Age,
  MeasurementsWeight,
  MeasurementsHeight,
  Goal,
  Diet,
  Foods,
  Home,
} from '../Pages';
import Tabroutes from './BottomTab.routes';
const Stack = createNativeStackNavigator();

export default function Stackroutes() {
  const {Navigator, Screen} = Stack;

  const [logged, setLogged] = useState(false);

  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ChooseSex">
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassword" component={ForgotPassWord} />
      <Screen name="OTPCode" component={OTPCode} />
      <Screen name="ChooseSex" component={ChooseSex} />
      <Screen name="MeasurementsHeight" component={MeasurementsHeight} />
      <Screen name="MeasurementsWeight" component={MeasurementsWeight} />
      <Screen name="Age" component={Age} />
      <Screen name="Goal" component={Goal} />
      <Screen name="Diet" component={Diet} />
      <Screen name="Foods" component={Foods} />
      <Screen
        name="tabBar"
        options={{headerShown: false}}
        component={Tabroutes}
      />
    </Navigator>
  );
}
