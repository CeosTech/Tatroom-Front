import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, Image } from "react-native";
import { Button, withTheme } from "react-native-elements";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const Separator = () => <View style={styles.separator}></View>;

const UselessTextInput = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState("Texte");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const URL_API = "https://tatroom-test.herokuapp.com/";

  /**
   * Connect to the app with username and password
   * @returns 
   */
  async function connection() {
    if(username === "" || password === ""){
      return;
    }
    const result = await axios.post(`${URL_API}users/authentification/`, {
      username: username,
      password: password
    }).then((res) => {
      saveToken(res.data.token)
      route.params.setIsLogged(true)
    })
    .catch((err) =>{
      console.log(err)
    })
  }
  
  /**
   * Stock the token locally
   * @param {value} 
   */
  async function saveToken(value){
    await SecureStore.setItemAsync("access", value)
  }

  /**
   * check if there is a value for the keys given
   * @param {key} 
   * @returns boolean
   */
  async function getValueFor(key) {
    console.log("BP SECURE STORE 1")
    let result = await SecureStore.getItemAsync(key);
    console.log(result)
    if (result) {
      console.log("============SECURE STORE==================")
      console.log("Acess key: " + result)
      return true
    } else {
      console.log("FALSE ====")
      return false
    }
  }

  useEffect(async() => {
    console.log("======= CONNEXION ===========")
    if(await getValueFor("access")){
      console.log("BP 1")
      route.params.setIsLogged(true)
    } else {
      console.log("BP 2")
      route.params.setIsLogged(false)
    }
  });

  return (
    <SafeAreaView>
      <Separator />
      <Separator />
      <Image source={require("../assets/images/logo.png")} style={styles.image} />
      <Text style={styles.baseText}>SE CONNECTER</Text>

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

  image: {
    resizeMode: "contain",
    height: "10%",
    width: "50%",
    marginLeft: "25%",
    marginBottom: "5%",
},

});

export default UselessTextInput;
