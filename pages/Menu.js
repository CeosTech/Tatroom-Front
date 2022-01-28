import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button, Text, View } from "react-native";


const Separator = () => (
  <View style={styles.separator} ></View>
);

const UselessTextInput = () => {
const [text, onChangeText] = React.useState("Texte");
const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      
      <Text style={styles.title}>MENU</Text>
      
      
      <Text style={styles.separator}>
          
      </Text>
      <Separator/>

      <Button
        title="Langue"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="black"
      />
      <Separator/>

      <Button
        title="Evaluer l'application"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="black"
      />
      <Separator/>

      <Button
        title="Donner votre avis"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="black"
      />
      <Separator/>
      
      <Button
        title="Termes et Conditions"
        color="black"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
      <Separator/>

      <Button
        title="Déconnexion"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="black"
        
      />
      <Separator/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
        
      },
  
  title:{ 
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },
  separator: {
    marginBottom: '10%',
  }
});

export default UselessTextInput;