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
import Inscription from "./Inscription";
import DescriptionClient from "./DescriptionClient";
import SearchBar from "./Searchbar.js";
import ProfilTatoueur from "./ProfilTatoueur.js";
import Reinitialisermdp from "./Reinitialisermdp";
import Popup from "./Popup";
import Popupenregrdv from "./Popupenregrdv";
import Popupenvdevis from "./Popupenvdevis";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
        <Stack.Navigator initialRouteName="Inscription">

          <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
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
          <Stack.Screen options={{ headerShown: false }} name="Inscription" component={Inscription} />
          {/* <Stack.Screen options={{ headerShown: false }} name="Reinitialisermdp" component={Reinitialisermdp} />
          <Stack.Screen options={{ headerShown: false }} name="Popup" component={Popup} />
          <Stack.Screen options={{ headerShown: false }} name="Popupenvdevis" component={Popupenvdevis} />
          <Stack.Screen options={{ headerShown: false }} name="Popupenregrdv" component={Popupenregrdv} />
          <Stack.Screen options={{ headerShown: false }} name="ProfilTatoueur" component={ProfilTatoueur} />
          <Stack.Screen options={{ headerShown: false }} name="DescriptionClient" component={DescriptionClient} />
          <Stack.Screen options={{ headerShown: false }} name="RendezVous" component={RendezVous} />
          <Stack.Screen options={{ headerShown: false }} name="SearchBar" component={SearchBar} />
          <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
          <Stack.Screen options={{ headerShown: false }} name="Menu2" component={Menu2} /> */}
          


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