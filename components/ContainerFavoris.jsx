import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Tile } from 'react-native-elements';



const Tiles  = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
    <ScrollView style={{ paddingVertical: 10 }}>

      <Tile
        imageSrc={ props.image }
        title= " Soho Ink"
        adresse= "93150 Blanc Mesnil"
        titleStyle={{ fontSize: 20}}
        width={310}
        containerStyle={{
            backgroundColor: "black",
            }}
        />
      
      
    </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  

    subHeader: {
        backgroundColor : "black",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
      }
    });

  export default Tiles;