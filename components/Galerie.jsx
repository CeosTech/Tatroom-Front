import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, TextInput, Text } from "react-native";
import { Image } from 'react-native-elements';


const Galerie = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        console.log(props)
    })

    return (
        <View style={styles.container}>
            <FlatList
                data={props.listImages}
                style={styles.list}
                numColumns={2}
                keyExtractor={(e) => e}
                renderItem={({ item }) => {
                    return(<Image
                        source={item.toString().includes("https") ?{uri: "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/brouillons/tatoo-bon-568327/5268632-1-fre-FR/Tatoo-bon.jpg"} : item }
                        containerStyle={styles.item}
                    />)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        color: "white",
    },
    list: {
        width: "1300%",
        /* backgroundColor: 'black', */
    },
    item: {
        aspectRatio: 1,
        width: 300,
        flex: 1,
        marginLeft: "2%",
        marginRight: "2%",
        marginBottom: "5%",
    },
})

export default Galerie;