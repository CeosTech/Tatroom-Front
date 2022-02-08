import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
//==========
import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "./Menu";
import Menu2 from "./Menu2";
import Profil2 from "./Profil2";
import Profil from "./Profil";
import RendezVous from "./RendezVous";
import DescriptionClient from "./DescriptionClient";
import SearchBar from "./Searchbar.js";
import ProfilTatoueur from "./ProfilTatoueur.js";




const Stack = createNativeStackNavigator();

export default function App() {

  return (
        <Stack.Navigator initialRouteName="Searchbar">

          <Stack.Screen options={{ headerShown: true }} name="Menu" component={Menu} />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitleAlign: 'center',
              title: "Rechercher",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                borderBottomWidth: 0,
              },
            }}
            name="Searchbar"
            component={SearchBar}
          />
          <Stack.Screen options={{ headerShown: false }} name="Profil" component={Profil} />

        </Stack.Navigator>
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