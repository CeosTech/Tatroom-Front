
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';

type ButtonsComponentProps = {};

const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
  
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
                  size: 25,
                  color: 'black',
                }}
                iconLeft
                iconContainerStyle={{ marginLeft: -45, marginRight: 80 }}
              />
              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Langue"
                type="clear"
                titleStyle={{ color: 'black' }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'black',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              />

              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Évaluer l'application"
                type="clear"
                titleStyle={{ color: 'black' }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'black',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              />

              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Donner votre avis"
                type="clear"
                titleStyle={{ color: 'black' }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'black',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              />

              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Termes & Conditions"
                type="clear"
                titleStyle={{ color: 'black' }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'black',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              />

              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Déconnexion"
                type="clear"
                titleStyle={{ color: 'black' }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'black',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              />
            </View>
       
  
  );
};
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  
  }
});

export default withTheme(Buttons, '');