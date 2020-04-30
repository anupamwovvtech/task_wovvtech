/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MainStack from './src/router/Mainrouter';
import * as Some from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from 'native-base';
console.disableYellowBox = true;
class App extends React.Component {
  render() {
    return (
      <Root>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Root>
    );
  }
}

export default App;
