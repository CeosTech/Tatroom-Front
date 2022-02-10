import React from "react";
import {View, SafeAreaView, StyleSheet, TextInput , Button, Text} from "react-native";
import { Icon } from 'react-native-elements';
  
import DescriptionFavoris from "../components/DescriptionFavoris";

const Favoris = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <DescriptionFavoris/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        //justifyContent: "center",
        alignItems: 'center',
        
    },
    title: {
        color: "black",
        fontSize: "1.5em",
        fontWeight: "bold",
       
    },
});

export default Favoris;