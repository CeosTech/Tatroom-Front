import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Presentation from './pages/Presentation';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Profil from './pages/Profil';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Presentation" component={Presentation} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Profil" component={Profil} />
      
    </Stack.Navigator>
  );
}