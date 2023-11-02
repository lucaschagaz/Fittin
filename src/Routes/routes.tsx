import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stackroutes} from './Stack.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stackroutes />
    </NavigationContainer>
  );
};
