import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//import of react native element librairy
import { Tile } from 'react-native-elements';


import image5 from "../assets/images/galerie/5.jpeg";
import image6 from "../assets/images/galerie/6.jpeg";
import image7 from "../assets/images/galerie/7.jpeg";



const SwitchComponent = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Rechercher un tatoueur par ville</Text>

      <SearchBar
        placeholder="Recherchez par ville ..."
        onChangeText={setSearch}
        value={search}
        containerStyle={{
          marginBottom: 10,
          backgroundColor: "white",
          borderTop: 0,
          borderBottom: 0,
          width: "100%",
          //height: "100%",
          //height: "100%",

        }}//
        inputContainerStyle={{
          backgroundColor: "white",
          border: "3px solid #000000",
          borderBottomWidth: 3,
          borderRadius: 20,
          witdh: "100%",
        }} />
      <Tile
        imageSrc={image5}
        title="soho Ink"
        titleStyle={{ fontSize: 25, color: "black", backgroundColor: "white" }}
        featured
        caption="Paris"
        activeOpacity={1}
        width={310}
        onPress={() => navigation.navigate('ProfilTatoueur')}


      />


    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
    //justifyContent: "center",
    alignItems: "center",
    //height: "100vh",


  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: "10%",
    fontSize: '2em',
  },
  tile: {

  },
});

export default SwitchComponent;