import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ActionItem from './ActionItem';
import ActionDetail from './ActionDetail';
import JournalForm from './JournalForm'
import ActionUpdate from './Action/ActionUpdate'
import JournalUpdate from './Journal/JournalUpdate';
import { listAction } from './API';


/**
 * Form == Create 
 */
export default class Service extends Component {
    render() {
        const Stack = createStackNavigator()
        const Action = props => <ActionItem query={listAction({category : "produit"})} {...props} />
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Liste des revenus"
                    options={{headerShown: false}}
                    component={Action} />

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
