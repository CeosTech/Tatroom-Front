import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Avatar, Button } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListStyles from "./ListStyles";
import Galerie from "./Galerie"

import image1 from "../assets/images/galerie/1.png";
import image3 from "../assets/images/galerie/3.jpg";
import image4 from "../assets/images/galerie/4.png";

const Tab = createBottomTabNavigator();

const DescriptionTatoueur = () => {
    const [firstname, setFirstname] = useState("Soho")
    const [lastname, setLastname] = useState("Ink")

    const [addressP, setAddressP] = useState("3 Av. Tatroom, 93600 Aulnay-sous-Bois")
    const [phoneNumber, setPhoneNumber] = useState(6122334455)
    const [email, setEmail] = useState("soho.ink@gmail.com")
    const [siteWeb, setSiteWeb] = useState("ink.soho.fr")
    const [schedule, setSchedule] = useState("Lundi - Samedi : 10h00 - 18h00")
    const [listStyles, setListStyles] = useState(["3D", "Abstract", "Anatomical", "Celtic"]);
    const [listImages, setListImages] = useState([image1, "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/brouillons/tatoo-bon-568327/5268632-1-fre-FR/Tatoo-bon.jpg", image3, image4])

    return (
        <View style={styles.container}>
            <Avatar
                size={100}
                rounded
                source={'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}
            />

            <Text style={styles.title}>{firstname + " " + lastname}</Text>
            <Text style={styles.text}> {addressP}</Text>
            <Text style={styles.text}> +33 {phoneNumber}</Text>
            <Text style={styles.text}>{siteWeb}</Text>
            <Text style={styles.text}> {email}</Text>
            <Text style={styles.text}> {schedule}</Text>
            <View style={styles.innerContainer}>
                <Button
                    title="Prends RDV"
                    titleStyle={{ fontWeight: '700', color: "black" }}
                    buttonStyle={{
                        backgroundColor: 'white',
                        //borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                    }}
                    containerStyle={{
                        width: "40vw",
                        height: 45,
                        marginRight: "5%",
                    }}
                />

                <Button
                    title="Devis"
                    titleStyle={{ fontWeight: '700', color: "black" }}
                    buttonStyle={{
                        backgroundColor: 'white',
                        //borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 5,
                    }}
                    containerStyle={{
                        width: "40vw",
                        height: 45,
                        marginLeft: "10%",
                    }}
                />
            </View>

            <Text style={styles.text}> Style(s) : </Text>
            <ListStyles listStyles={listStyles} />

            <Galerie listImages={listImages} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        //justifyContent: "center",
        alignItems: 'center',
    },
    innerContainer: {
        marginTop: "5%",
        marginBottom: "5%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: "1.5em",
        fontWeight: "bold",
    },
    text: {
        color: "white",
    }
})

export default DescriptionTatoueur;