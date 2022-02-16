import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { ButtonGroup } from 'react-native-elements';


const ListStyles = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        console.log(props)
    })

    return (
        <View style={styles.container}>
            <ButtonGroup
                buttons={props.listStyles}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                containerStyle={{ 
                    marginBottom: 20, 
                    width: "100%", 
                    border: "none",
                    backgroundColor: "none",
                }}
                // UNSELECTED PART
                buttonContainerStyle = {{ 
                    backgroundColor: "black",
                    border: "1px solid white",
                    borderRadius: 15,
                    marginLeft: "2%",
                }}
                textStyle={{ 
                    color: "white",
                }}
                // SELECTED PART 
                selectedButtonStyle = {{ 
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
                selectedTextStyle = {{ 
                    color: "black"
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        marginBottom: "5%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    text: {
        color: "white",
    }
})

export default ListStyles;