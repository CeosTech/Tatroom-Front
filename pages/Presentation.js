import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

// You can import from local files
// or any pure javascript modules available in npm


export default function Presentation() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'black',
    width:"100%",
    height:"100%",
    
  },
  
});


