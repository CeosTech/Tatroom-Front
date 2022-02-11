import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text, useTheme } from 'react-native-elements';
import { Avatar, Button, Icon } from 'react-native-elements';

import Popupmodif from "../components/Popupmodif";

type TextComponentProps = {};
const TextComponent: React.FunctionComponent<TextComponentProps> = () => {
  const { theme } = useTheme();

  return (


     <View>
     <View style={styles.view}>
        <Text
          style={styles.text}
          h1
          h1Style={{ color: theme?.colors?.black }}
          >Profil</Text> 
           </View>
           
           <View style={styles.container}>
            <Avatar
                size={100}
                rounded
                source={'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}
            />
  
          <Icon name= 'bell'
           type='font-awesome'
           size='30'
           color='black'/>

          <Icon name= 'bars'
           type='font-awesome'
           size='30'
           color='black'/>
           
            <Text>John doe, San Francisco</Text>

            {/* <Button
                    title="Modifier profil"
                    titleStyle={{ fontWeight: '700', color: "black" }}
                    buttonStyle={{
                        backgroundColor: '#fff',
                        //borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 70,
                    }}
                    containerStyle={{
                        width: "20vw",
                        height: 45,
                        marginLeft: "20%",
                    }}
                /> */}

                  <Icon name= 'heart'
                   type='font-awesome'
                   size='30'
                   color='black'
                  />
                   
            <Button
                    title="Ajouter Des favoris"
                    titleStyle={{ fontWeight: '700', color: "black" }}
                    buttonStyle={{
                        backgroundColor: '#fff',
                        borderWidth: 0,
                        borderRadius: 50,
                    }}
                    containerStyle={{
                        width: "20vw",
                        height: 45,
                        marginLeft: "20%",
                    }}
                      />
                    <Popupmodif/>
                    </View>
                     </View>
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
    marginLeft: '50%',
    marginRight: 'auto',
  },

  align: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    marginTop: "-10%",
    padding: 10,
    width:"45%",
  },
  container: {
    alignItems: 'center'
  },

 


});

export default TextComponent;