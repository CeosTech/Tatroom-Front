// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Presentation from '../pages/Presentation';
import Inscription from '../pages/Inscription';
import Connexion from '../pages/Connexion';
import Profil from '../pages/Profil';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inscription">
   
      {/*<Stack.Screen name="Presentation" component={Presentation} />*/}

      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Profil" component={Profil} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Navigation;