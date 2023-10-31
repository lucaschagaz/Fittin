import {View as RNView, ScrollView as RNScrolView} from 'react-native';
import React from 'react';

interface IComponentProps {
  children: React.ReactNode;
  backgroundColor: string;
}
export const View = ({children, backgroundColor}: IComponentProps) => {
  return <RNView style={{backgroundColor, flex: 1}}>{children}</RNView>;
};

export const ScrollView = ({children, backgroundColor}: IComponentProps) => {
  return (
    <RNScrolView style={{backgroundColor, flex: 1}}>{children}</RNScrolView>
  );
};
