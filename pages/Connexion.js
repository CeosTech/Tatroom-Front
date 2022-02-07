
import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Text, View } from "react-native";
import {  Button, withTheme } from 'react-native-elements';



const Separator = () => (
  <View style={styles.separator} ></View>
);

const UselessTextInput = ({ navigation }) => {

const [text, onChangeText] = React.useState("Texte");
const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
       <Separator/>
       <Separator/>
      <Text style={styles.baseText}>CONNEXION</Text>


      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Email"
        marginVertical= "30"
        fontWeight= "bold"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Mot de passe"
        
      />
      <Text style={styles.title}>
          Mot de passe oublié?
      </Text>
      <Separator/>

      <Button
        title="CONNEXION"
        buttonStyle={{ backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
      }}
        containerStyle={{
          width: 260,
          marginVertical: 10,
          marginHorizontal: 50,
        }}
        
      />
      <Button
        title="INSCRIPTION"
        buttonStyle={{ borderColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
      }}
      type="outline"
      
        containerStyle={{
          width: 260,
          marginVertical: 10,
          marginHorizontal: 50,
        }}
        titleStyle={{
          color: 'black',
        }}
        onPress={() => navigation.navigate('Inscription')}
      />
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    margin: 52,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  baseText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
  },
  title:{ 
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
    marginVertical: 10,
    },
  
  separator: {
    marginBottom: '15%',
  }
});

export default UselessTextInput;