
import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button, Text , View} from "react-native";
import { Icon } from 'react-native-elements';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Texte");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.align}>
            <Icon
            name= 'arrow-left'
            type= 'font-awesome'
            size= '25'
            color= 'black' />
        
          <Icon
            name= 'times'
            type= 'font-awesome'
            size= '25'
            color= 'black' />
        </View>

      <Text style={styles.title}>Créer un rendez-vous</Text>
     
      <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            placeholder="Nom du salon"
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
        placeholder="Zone du corps"
      />
      <Text style={styles.title}>
            0*0 cm
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Hauteur"
      />
        <Text style={styles.title}>
            Centimètres
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Largeur"
      />
      <Button
        title="ENVOYER"
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
},
align: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: "space-between",
  marginTop: "5%",
  width: "50%",
},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",

  },

  title:{ 
    color: 'black',
    textAlign: 'center',
  },
});

export default UselessTextInput;