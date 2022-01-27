import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';

import Presentation from './pages/Presentation';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content"/>
      
      <Connexion />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
