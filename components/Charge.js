import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ActionItem from './ActionItem';
import ActionDetail from './ActionDetail';
import JournalUpdate from './Journal/JournalUpdate';
import ActionUpdate from './Action/ActionUpdate';
import JournalForm from './JournalForm';
import { listAction } from './API';

/**
 * Form == Create 
 */
export default class Charge extends Component {


    render() {
        const Stack = createStackNavigator()
        const Action = props => <ActionItem query={listAction({category : "charge"})} {...props} />
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Liste des dépenses"
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
