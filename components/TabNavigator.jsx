import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import SearchBar from '../pages/Searchbar';
import Profil from '../pages/ProfilTatoueur';
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Rechercher" >
      <Tab.Screen name="Rechercher" component={Home} 
        options={{ 
          headerShown: false, 
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({ color, size }) => (
            <Icon type="font-awesome" name="search" color={color} size={size} />
          ),
          headerStyle: {
              backgroundColor: '#FFF',
              height: 120,
            }, 
        }} 
      />
      <Tab.Screen name="Profil" component={Profil} 
        options={{ 
          headerShown: true, 
          tabBarActiveTintColor: '#000',
          tabBarIcon: ({ color, size }) => (
            <Icon type="font-awesome" name="user" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: '#000',
          }, 
          headerTitleStyle: {
            color: "white",
            headerTitleAlign: 'center',
          }
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;