import React, { Component } from 'react'
import JournalItem from './JournalItem';
import { listJournal, } from './API'
import { createStackNavigator } from '@react-navigation/stack'
import JournalUpdate from './Journal/JournalUpdate';

export default class Journal extends Component {

    render() {
        const Stack = createStackNavigator()
        const History = props => <JournalItem query={listJournal({category : ""})} {...props} />
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Historique"
                    component={History}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Journal"
                    component={JournalUpdate}
                />




            </Stack.Navigator>
        )
    }
}
