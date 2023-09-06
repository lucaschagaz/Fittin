import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Routes from './Routes/routes';
import {ThemeProvider} from 'styled-components';

import theme from './Styles/Theme/ligth';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.Conteiner}>
        <Routes />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  Conteiner: {
    flex: 1,
    width: '100%',
  },
});
