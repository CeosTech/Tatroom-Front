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
import Reinitialisermdp from "./Reinitialisermdp";
//import Popupdeconnection from "./Popupdeconnection";
//import Popupmodif from "./Popupmodif";
//import Popupcomptecreer from "./Popupcomptecreer";
// import Inscription from "./Inscription";
// import Presentation from "./Presentation";
// import Connexion from "./Connexion";
import Favoris from "./Favoris";
import MesRdv from "../components/mes_rdv/MesRdv";
import DevisAttente from "../components/mes_rdv_confirmer/DevisAttente";
import DevisItems from "../components/mes_rdv_confirmer/DevisItems";
import Presentation from "../components/presentation/Presentation";
import MesInfos from "../components/mes_infos/MesInfos";
import MenuTatoueur from "../components/menu_tatoueur/MenuTatoueur";
import Inscription from "../components/inscription/Inscription";
import Connexion from "../components/connexion/Connexion";
import FadeIn from "../components/animates/FadeIn";





const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Stack.Navigator initialRouteName="Connexion">

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
        name="SearchBar"
        component={SearchBar}
      />
      <Stack.Screen options={{ headerShown: false }} name="Menu2" component={Menu2} />
      <Stack.Screen options={{ headerShown: false }} name="Inscription" component={Inscription} />
      <Stack.Screen options={{ headerShown: false }} name="Presentation" component={Presentation} />
      <Stack.Screen options={{ headerShown: false }} name="Connexion" component={Connexion} />
      <Stack.Screen options={{ headerShown: false }} name="DescriptionClient" component={DescriptionClient} />
      <Stack.Screen options={{ headerShown: false }} name="Profil" component={Profil} />
      <Stack.Screen options={{ headerShown: false }} name="MesRdv" component={MesRdv} />
      <Stack.Screen options={{ headerShown: false }} name="DevisAttente" component={DevisAttente} />
      <Stack.Screen options={{ headerShown: false }} name="DevisItems" component={DevisItems} />
      <Stack.Screen options={{ headerShown: false }} name="MesInfos" component={MesInfos} />
      <Stack.Screen options={{ headerShown: false }} name="MenuTatoueur" component={MenuTatoueur} />
      <Stack.Screen options={{ headerShown: false }} name="FadeIn" component={FadeIn} />




      <Stack.Screen 
      options={{
          headerShown: true,
          headerTintColor: "white",
          headerTitleAlign: 'center',
          title: "Profil tatoueur",
          headerTitleStyle: {
            fontWeight: 'bold',
            color: "white",
          },
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: "black",
          },
        }} 
        name="ProfilTatoueur"
        component={ProfilTatoueur} 
        />
      <Stack.Screen options={{ headerShown: false }} name="RendezVous" component={RendezVous} />
      <Stack.Screen options={{ headerShown: false }} name="Favoris" component={Favoris} />
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