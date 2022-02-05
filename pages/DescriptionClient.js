
import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Text , View} from "react-native";
import { Icon, Input, Button, } from 'react-native-elements';

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
      
      <View style={styles.fixToText}>
      <Text style={styles.title}>
            
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Hauteur en cm"
        
        
      />
        <Text style={styles.title}>
            
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Largeur en cm"
       
      />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Commentaires"
        
      />
      

      <Button
        title="ENVOYER"
        buttonStyle={{ backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
      }}
        containerStyle={{
          width: 260,
          marginVertical: 50,
          
        }}
        titleStyle={{
          fontWeight: 'bold'
        }}
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
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    
  },

  title:{ 
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,

  },
});

export default UselessTextInput;