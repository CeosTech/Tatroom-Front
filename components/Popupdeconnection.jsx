import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button } from "react-native-elements";
import * as SecureStore from 'expo-secure-store';


const App = (props) => {
  const [modalVisible, setModalVisible] = useState(0);

  async function disconnect(){
    const res = await SecureStore.deleteItemAsync("access")
    if(res){
      console.log("Déconnecter")
      setModalVisible(!modalVisible)
      props.setIsLogged.setIsLogged(false)
      //navigation.navigate("Rechercher")
      return;
    }
    console.log("Autre")
    setModalVisible(!modalVisible)
    props.setIsLogged.setIsLogged(false)
    navigation.navigate("Rechercher")
  }

  useEffect(() => {
    console.log("===== POPUP =======")
    console.log(props)
})

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Etes vous sur de vouloir quitter?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </Pressable>
            
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => disconnect()}
            >
              <Text style={styles.textStyle}>Confirmer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Quitter</Text>
      </Pressable> */}

<Button
        title="Se déconnecter"
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
        onPress={() => setModalVisible(true)}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    padding: 10,
    marginBottom: 5,
    
  },
  buttonOpen: {
    backgroundColor: "black",
    
  },
  buttonClose: {
    backgroundColor: "black",
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
    
  
  }
});

export default App;