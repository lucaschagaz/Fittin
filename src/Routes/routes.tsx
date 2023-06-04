import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stackroutes from './Stack.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stackroutes />
    </NavigationContainer>
  );
}
