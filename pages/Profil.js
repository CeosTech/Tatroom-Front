import React from "react";
import {View, SafeAreaView, StyleSheet, TextInput , Button, Text} from "react-native";
import { Icon } from 'react-native-elements';


const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Texte");
  const [number, onChangeNumber] = React.useState(null);
  
  
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.align}>
          <Icon name= 'arrow-left'
           type='font-awesome'
           size='30'
           color='black'/>

          <Icon name= "pencil"
           type='font-awesome'
           size='30'
           color='black'/>
          </View>
      
      <Text style={styles.title}>PROFIL</Text>
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
     
<Button
        title="Enregistrer les modifications"
        color="black"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
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
    padding: 10,
},

align: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: "space-evenly",
  marginTop: "5%",
  padding: 10,
  width:"45%",
},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },

  title:{ 
    color: 'black',
    textAlign: 'center',
   
  },
});

export default UselessTextInput;