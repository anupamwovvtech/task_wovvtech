import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import CapitalInfoScreen from '../screens/CapitalInfoScreen/CapitalInfoScreen.';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={'Home'} component={HomeScreen} />
    <Stack.Screen name={'Details'} component={DetailsScreen} />
    <Stack.Screen name={'Capital'} component={CapitalInfoScreen} />
  </Stack.Navigator>
);

export default MainStack;
