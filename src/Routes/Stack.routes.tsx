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
  Experience,
  CreateWorkout,
  ExerciseByGruop,
} from '../Pages';
import {Tabroutes} from './BottomTab.routes';
import {AuthNavigatorParamList} from '../@types/navigation';

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const Stackroutes = () => {
  const {Navigator, Screen} = Stack;

  const [logged, setLogged] = useState(false);

  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="tabBar">
      <Screen name="OnBoarding" component={OnBoarding} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassWord" component={ForgotPassWord} />
      <Screen name="OTPCode" component={OTPCode} />
      <Screen name="ChooseSex" component={ChooseSex} />
      <Screen name="MeasurementsHeight" component={MeasurementsHeight} />
      <Screen name="MeasurementsWeight" component={MeasurementsWeight} />
      <Screen name="Age" component={Age} />
      <Screen name="Goal" component={Goal} />
      <Screen name="Experience" component={Experience} />
      <Screen name="Diet" component={Diet} />
      <Screen name="Foods" component={Foods} />
      <Screen
        name="CreateWorkout"
        options={{headerShown: false}}
        component={CreateWorkout}
      />
      <Screen
        name="ExerciseByGruop"
        options={{headerShown: false}}
        component={ExerciseByGruop}
      />
      <Screen
        name="tabBar"
        options={{headerShown: false}}
        component={Tabroutes}
      />
    </Navigator>
  );
};
