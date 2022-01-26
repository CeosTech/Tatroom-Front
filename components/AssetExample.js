import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       
      </Text>
      <Image style={styles.logo} source={require('../assets/TATROOM.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  
  
  logo: {
    height: 350,
    width: 230,
  }
});
