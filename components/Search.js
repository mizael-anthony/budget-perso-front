import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ActionDetail from './ActionDetail'
import SearchItem from './SearchItem'
import JournalUpdate from './Journal/JournalUpdate';
import ActionUpdate from './Action/ActionUpdate';
import JournalForm from './JournalForm';

export default class Search extends Component {
    render() {
        const Stack = createStackNavigator()

        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Recherche d'action"
                    component={SearchItem}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Détail"
                    component={ActionDetail}
                />

                <Stack.Screen
                    name="Nouveau"
                    component={JournalForm}
                />

                <Stack.Screen
                    name="Journal"
                    component={JournalUpdate}
                />

                <Stack.Screen
                    name="Activité"
                    component={ActionUpdate}

                />




            </Stack.Navigator>
        )
    }
}
