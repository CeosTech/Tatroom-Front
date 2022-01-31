import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
//==========
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigation from "./NavigationContainer/Navigation";
import Presentation from "./pages/Presentation";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Menu from "./pages/Menu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Inscription">
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Connexion" component={Connexion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
