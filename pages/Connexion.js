
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
      
      <Text style={styles.title}>CONNEXION</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Email"
       
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Mot de passe"
        
      />
      <Text style={styles.separator}>
          Mot de passe oublié?
      </Text>
      
      <Button
        title="CONNEXION"
        color="black"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
      <Separator/>

      <Button
        title="INSCRIPTION"
        onPress={() => Alert.alert('Simple Button pressed')}
        color="black"
        
      />
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250
  },
  title:{ 
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  separator: {
    marginBottom: '5%',
  }
});

export default UselessTextInput;