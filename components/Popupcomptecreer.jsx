import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Icon } from "react-native";
import { Button } from "react-native-elements";

const App = (props) => {
  const [modalVisible, setModalVisible] = useState(0);

  useEffect(() => {
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
          
          
            <Text style={styles.modalText}>Votre compte a été créer</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
             
            </Pressable>
            
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
             
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Créer Compte</Text>
      </Pressable> */}
      <Button
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
        onPress={() => setModalVisible(true)}
        />

    </View>
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    padding: 10,
  },
  buttonOpen: {
  backgroundColor: "black",
  },
  // buttonClose: {
  //   backgroundColor: "black",
  // },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  }
});

export default App;