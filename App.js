import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Journal from './components/Journal';
import Charge from './components/Charge';
import Service from './components/Service';
import ActionForm from './components/ActionForm';
import Search from './components/Search';
import {DarkTheme} from '@react-navigation/native'
const Drawer = createDrawerNavigator()



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Mon historique" component={Journal} />
        <Drawer.Screen name="Mes dépenses" component={Charge} />
        <Drawer.Screen name="Mes revenus" component={Service} />
        <Drawer.Screen name="Activité" component={ActionForm} />
        <Drawer.Screen name="Recherche" component={Search} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});
