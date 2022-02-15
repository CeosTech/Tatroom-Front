import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import { Button, withTheme } from "react-native-elements";
import axios from 'axios';

const Separator = () => <View style={styles.separator}></View>;

const UselessTextInput = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("Texte");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const URL_API = "https://tatroom-test.herokuapp.com/";

  async function connection() {
    console.log(username)
    console.log(password)
    if(username === "" || password === ""){
      return;
    }
    await axios.post(`${URL_API}shops/authentification/`, {
      username: username,
      password: password
    }).then((res) => {
      console.log(res)
    })
    .catch((err) =>{
      console.log(err)
    })
  }



  useEffect(() => {
    console.log("======================");
    console.log(navigation);
    console.log(route.params);
  });

  return (
    <SafeAreaView>
      <Separator />
      <Separator />
      <Text style={styles.baseText}>CONNEXION</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        placeholder="Nom d'utilisateur"
        marginVertical="30"
        fontWeight="bold"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Mot de passe"
      />
      <Text style={styles.title}>Mot de passe oublié?</Text>
      <Separator />

      <Button
        title="Se connecter"
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 260,
          marginVertical: 10,
          marginHorizontal: 70,
        }}
        onPress={() => connection() }//route.params.setIsLogged(true)}
      />
     <Text style={styles.title}>OU</Text>
      <Button
        title="S'inscrire"
        buttonStyle={{ borderColor: "black", borderRadius: 30, borderWidth: 2 }}
        type="outline"
        containerStyle={{
          width: 260,
          marginVertical: 10,
          marginHorizontal: 70,
        }}
        titleStyle={{
          color: "black",
        }}
        onPress={() => navigation.navigate("Inscription")}
      />

      <Text style={styles.title}>Pas encore inscrit ?</Text>
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
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 50,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    marginVertical: 10,
  },
  button: {
    alignItems: "center",
  },
  separator: {
    marginBottom: "15%",
  },
  Saview: {
    backgroundColor: "white",
    height: "100vh",
  },
});

export default UselessTextInput;
