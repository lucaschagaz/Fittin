import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {execicios} from '../../Utils/Mocks/Variabels';

export type exercicesName = keyof typeof execicios;

export type AuthNavigatorParamList = {
  OnBoarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassWord: undefined;
  OTPCode: undefined;
  ChooseSex: undefined;
  MeasurementsHeight: undefined;
  MeasurementsWeight: undefined;
  Age: undefined;
  Goal: undefined;
  Experience: undefined;
  Diet: undefined;
  Foods: undefined;
  tabBar: undefined;
  CreateWorkout: undefined;
  CreateWorkoutByGroup: {group: exercicesName; day: string};
};

export type RootScreenNavigationProp =
  NativeStackNavigationProp<AuthNavigatorParamList>;

export type TabBarNavigatorParamList = {
  Home: undefined;
  Workout: undefined;
  Diets: undefined;
  Insights: undefined;
  Profile: undefined;
};

export type TabBarScreenNavigationProp =
  BottomTabNavigationProp<TabBarNavigatorParamList>;
