import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button, Text } from "react-native";


const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Texte");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>INSCRIPTION</Text>
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
      <Button
        title="INSCRIPTION"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

        <Text style={styles.title}>
            Déjà un compte? Connexion
        </Text>

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
    backgroundColor: '#F1EFE5',
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    height: "100%",
},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  title:{ 
    color: 'black',
    textAlign: 'center',
  },
});

export default UselessTextInput;