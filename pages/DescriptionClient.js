
import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button, Text , View} from "react-native";
import { Icon, Input } from 'react-native-elements';

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Texte");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.align}>
            <Icon
            name= 'arrow-left'
            type= 'font-awesome'
            size= '10'
            height= '16'
            color= 'black' 
            
            />
            
          
        </View>

      <Text style={styles.title}>Description du tatouage client</Text>
     
      <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            placeholder="Télécharger une image"
      />
      

      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Zone à tatouer"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Budget du tatouage?"
        keyboardType="numeric"
      />
      
      <View>
      <Text style={styles.title}>
            0*0 cm
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Hauteur"
        justifyContent="space-between"
      />
        <Text style={styles.title}>
            Centimètres
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Largeur"
        justifyContent="space-between"
      />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Commentaires"
       height="50"
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