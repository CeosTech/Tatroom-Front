import React from "react";
import { SafeAreaView, StyleSheet, TextInput ,  Text, View } from "react-native";
import {  Button } from 'react-native-elements';

import Popupcomptecreer from "../components/Popupcomptecreer";


const Separator = () => (
  <View style={styles.separator} />
);
const UselessTextInput = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("Texte");
  const [number, onChangeNumber] = React.useState(null);

  return (
    
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.baseText}>INSCRIPTION</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Nom"
       
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Prénom"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Adresse"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Code Postal"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Ville"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mot de passe"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Confirmation mot de passe"
        keyboardType="numeric"
      
      />
      {/* <Button
        title="S'inscrire"
        buttonStyle={{ 
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
      }}
        containerStyle={{
          width: 260,
          marginVertical: 10,
          marginHorizontal: 50,
        }}
        titleStyle={{
          fontWeight: 'bold',
        }}
        /> */}
      
        <View>
        <Popupcomptecreer/>
        <Text style={styles.title} onPress={() => navigation.navigate('Connexion')}>
            Déjà un compte? Connexion
           
        </Text>
       
        </View>
        <Separator/>
        <Text style={styles.title}>
           By creating an account you agree to our.
        </Text>
        <Text style={styles.title}>
            Terms of Service and Privacy Policy
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    height: "100%",
},
align: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},
  input: {
    marginVertical: 5,
    marginTop: 10,
    height: 40,
    margin: 5,
    borderWidth: 1,
    width: "70%",
  },

  title:{ 
    color: 'black',
    textAlign: 'center',
    
  },
  separator: {
    marginVertical: 8,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,

  },
});

export default UselessTextInput;