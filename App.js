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
import Menu2 from "./pages/Menu2";

// import RendezVous from "./pages/RendezVous";
// import DescriptionClient from "./pages/DescriptionClient";
// import SearchBar from "./pages/Searchbar";
import Profil2 from "./pages/Profil2";
import Profil from "./pages/Profil";
import RendezVous from "./pages/RendezVous";
import DescriptionClient from "./pages/DescriptionClient";
import SearchBar from "./pages/Searchbar";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>

      <Stack.Navigator initialRouteName="DescriptionClient">
      

        <Stack.Screen  options={{ headerShown: true }} name="Presentation" component={Presentation} />
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

        <Stack.Screen options={{ headerShown: false }} name="Connexion" component={Connexion} />

        <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
        <Stack.Screen options={{ headerShown: false }} name="RendezVous" component={RendezVous} />
        <Stack.Screen options={{ headerShown: false }} name="DescriptionClient" component={DescriptionClient} />
        <Stack.Screen options={{ headerShown: false }} name="SearchBar" component={SearchBar} />
           <Stack.Screen options={{ headerShown: false }} name="Profil" component={Profil} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Profil2" component={Profil2} />


        <Stack.Screen options={{ headerShown: false }} name="Menu2" component={Menu2} />

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