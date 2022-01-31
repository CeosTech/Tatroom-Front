import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';


import Navigation from './NavigationContainer/Navigation';
import Presentation from './pages/Presentation';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Menu from './pages/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content"/>
      <Navigation/>
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
