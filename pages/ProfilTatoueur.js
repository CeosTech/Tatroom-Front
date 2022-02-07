import React from "react";
import {View, SafeAreaView, StyleSheet, TextInput , Button, Text} from "react-native";
import { Icon } from 'react-native-elements';

import DescriptionTatoueur from "../components/DescriptionTatoueur"

const ProfilTatoueur = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <DescriptionTatoueur />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        //justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        color: "white",
    }
})

export default ProfilTatoueur;