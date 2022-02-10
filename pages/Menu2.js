
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';

type ButtonsComponentProps = {};

const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

  return (
            <View style={styles.buttonsContainer}>

            <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                title="MENU"
                type="clear"
                titleStyle={{ color: 'black' }}
                icon={{
                  name: 'arrow-left',
                  type: 'font-awesome',
                  size: 15,
                  color: 'black',
                }}
                iconLeft
                iconContainerStyle={{ marginLeft: -45, marginRight: 80 }}
              />
             
              <Button

                title="Langue"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                iconRight
                icon={
                {
                  name: "angle-right",
                  type: "font-awesome",
                }
                }
                 titleStyle={{
                  color: 'black',
                  marginHorizontal: 20,
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  borderRadius: 5,
                  height: 70,
                }}
                containerStyle={{
                  height: 70,
                  width: "100%",
                  borderBottom: "2px solid black",
                }}
                onPress={() => console.log('aye')}
              />

              <Button
                title="Evaluer l'application"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                iconRight
                icon={
                {
                  name: "angle-right",
                  type: "font-awesome",
                }
                }
                 titleStyle={{
                  color: 'black',
                  marginHorizontal: 20,
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  borderRadius: 5,
                  height: 70,
                }}
                containerStyle={{
                  height: 70,
                  width: "100%",
                  borderBottom: "2px solid black",
                }}
                onPress={() => console.log('aye')}
              />

              <Button

                title="Donner votre avis"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                iconRight
                icon={
                {
                  name: "angle-right",
                  type: "font-awesome",
                }
                }
                 titleStyle={{
                  color: 'black',
                  marginHorizontal: 20,
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  borderRadius: 5,
                  height: 70,
                }}
                containerStyle={{
                  height: 70,
                  width: "100%",
                  borderBottom: "2px solid black",
                }}
                onPress={() => console.log('aye')}
              />
              
              <Button
                title="Termes & conditions"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                iconRight
                icon={
                {
                  name: "angle-right",
                  type: "font-awesome",
                }
                }
                 titleStyle={{
                  color: 'black',
                  marginHorizontal: 20,
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  borderRadius: 5,
                  height: 70,
                }}
                containerStyle={{
                  height: 70,
                  width: "100%",
                  borderBottom: "2px solid black",
                }}
                onPress={() => console.log('aye')}
              />
              <Button
                title="Déconnexion"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                iconRight
                icon={
                {
                  name: "angle-right",
                  type: "font-awesome",
                }
                }
                 titleStyle={{
                  color: 'black',
                  marginHorizontal: 20,
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  borderRadius: 5,
                  height: 70,
                  
                }}
                containerStyle={{
                  height: 70,
                  width: "100%",
                  borderBottom: "2px solid black",
                }}
                onPress={() => console.log('aye')}
              />
            </View>
       
  
  );
};
const styles = StyleSheet.create({
  
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    
    backgroundColor: "white",
    //justifyContent: "center",
    
  }
});

export default withTheme(Buttons, '');