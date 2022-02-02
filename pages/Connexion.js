
import React from "react";
import { SafeAreaView, StyleSheet, TextInput , Button, Text, View } from "react-native";

const Separator = () => (
  <View style={styles.separator} ></View>
);

const UselessTextInput = ({ navigation}) => {

const [text, onChangeText] = React.useState("Texte");
const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
       <Separator/>
       <Separator/>
      <Text style={styles.title}>CONNEXION</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Email"
        marginVertical= "30"
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
        color="black"
        containerStyle={{
          width: 100,
          marginHorizontal: 30,
          marginVertical: 30,
        }}
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      
      <Separator/>

      <Button
        title="INSCRIPTION"
        onPress={() => navigation.navigate('Inscription')}
        color="black"
        
        
      />
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    margin: 52,
    borderWidth: 1,
    padding: 30,
    
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