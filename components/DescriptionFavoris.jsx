import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Avatar, Button } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListStyles from "./ListStyles";
import Galerie from "./Galerie";
import ContainerFavoris from "./ContainerFavoris";

import image5 from "../assets/images/galerie/5.jpeg";
import image6 from "../assets/images/galerie/6.jpeg";
import image7 from "../assets/images/galerie/7.jpeg";

const Tab = createBottomTabNavigator();

const DescriptionFavoris = () => {
    const [firstname, setFirstname] = useState("John")
    const [lastname, setLastname] = useState("Doe")
    const [addressP, setAddressP] = useState("San Francisco, CA")
    const [listImages, setListImages] = useState([image5, image6, image7])
  
    return (
        <View style={styles.container}>

        <Text style={styles.title}> Profil</Text>
         <Avatar
            size={100}
            rounded
            source={'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'}
            />   
            <Text style={styles.title}>{firstname + " " + lastname}</Text>
            <Text style={styles.text}> {addressP}</Text>
            <View style={styles.innerContainer}>
                <Button
                    title="Modifier le profil"
                    titleStyle={{ fontWeight: '500', color: "black" }}
                    buttonStyle={{
                        backgroundColor: 'white',
                        //borderColor: 'transparent',
                        borderWidth: 1,
                        borderRadius: 15,
                        borderColor: 'black',
                    }}
                    containerStyle={{
                        width: "70vw",
                        height: 45,
                        marginRight: "5%",
                    }}
                />
        </View>

           {/*<Galerie listImages={listImages} />*/}
             <ContainerFavoris image={image5 }/> 
             <ContainerFavoris image={image6 }/> 
             
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        //justifyContent: "center",
        alignItems: 'center',
        marginTop: '5%',
    },
    innerContainer: {
        marginTop: "5%",
        marginBottom: "5%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    title: {
        color: "black",
        fontSize: "1.5em",
        fontWeight: "bold",
        marginTop: "5%",
        marginBottom: "5%",

    },
    text: {
        color: "black",
        

    }
})
export default DescriptionFavoris;
