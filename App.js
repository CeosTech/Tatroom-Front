import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
//==========
import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./components/TabNavigator"
import Presentation from "./pages/Presentation";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Menu from "./pages/Menu";
import Menu2 from "./pages/Menu2";

import Profil from "./pages/Profil";
import RendezVous from "./pages/RendezVous";
import DescriptionClient from "./pages/DescriptionClient";
import SearchBar from "./pages/Searchbar";
import ProfilTatoueur from "./pages/ProfilTatoueur.js";
import Reinitialisermdp from "./pages/Reinitialisermdp";
import Popupdeconnection from "./pages/Popupdeconnection";
import Popupmodif from "./pages/Popupmodif";
import Popupcomptecreer from "./pages/Popupcomptecreer";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <NavigationContainer style={styles.container}>
      {isLogged ?
        <Stack.Navigator initialRouteName="Profil">

          <Stack.Screen options={{ headerShown: true }} name="Presentation" component={Presentation} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              title: "INSCRIPTION",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Inscription"
            component={Inscription}
          />
      <Stack.Screen options={{ headerShown: false }} name="Profil" component={Profil} />
      <Stack.Screen options={{ headerShown: false }} name="Connexion" component={Connexion} initialParams={{setIsLogged}} />


        </Stack.Navigator>
        :
        <TabNavigator />
      }
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