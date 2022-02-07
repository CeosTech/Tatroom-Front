import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text, useTheme } from 'react-native-elements';

type TextComponentProps = {};
const TextComponent: React.FunctionComponent<TextComponentProps> = () => {
  const { theme } = useTheme();

  return (


     <>
     <View style={styles.view}>
        <Text
          style={styles.text}
          h1
          h1Style={{ color: theme?.colors?.black }}
          >Profil</Text> 
           </View>
           
    
    </>
  );
};

const styles = StyleSheet.create({
   
    view: {
    margin: 10,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  more: {
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  align: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    marginTop: "5%",
    padding: 10,
    width:"45%",
  },




});

export default TextComponent;