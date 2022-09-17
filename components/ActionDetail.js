
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { deleteAction, deleteJournal } from './API'



class ActionDetail extends React.Component {

    _getJournalsOfAction = (data, identity) => {
        return (

            <View style={styles.container}>
                <View>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../icons/activities.png")}

                    />
                    <Text>{data.date}</Text>
                    <Text>Ar{data.cost}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={
                            () => this.props.navigation.navigate("Journal", { journal: data, action: identity })}

                    >

                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require("../icons/edit.png")}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { deleteJournal(data.id) }}
                    >

                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require("../icons/delete.png")}

                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const action = this.props.route.params.action
        const identity = { id: action.id, name: action.name }

        return (
            <ScrollView>
                <View>
                    <Image style={styles.img} source={{ uri: action.logo }} />
                    <Text style={{ color: 'purple', fontSize: 20, fontWeight: 5 }}>{action.name}</Text>
                    <View>
                        <TouchableOpacity
                            onPress={
                                () => this.props.navigation.navigate('Nouveau', { action: action })
                            }
                            style={{ backgroundColor: '#0A0' }}


                        >
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Ajouter</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={
                                () => this.props.navigation.navigate('Activité', { action: action })
                            }
                            style={{ backgroundColor: '#00A' }}

                        >
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Modifier</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { deleteAction(action.id) }}
                            style={{ backgroundColor: '#A00' }}
                        >
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Supprimer</Text>
                        </TouchableOpacity>

                        <Text style={{fontSize: 20, }}>Total : Ar {action.total_journal_cost.cost__sum}</Text>
                    </View>
                </View>

                <FlatList
                    data={action.journals}
                    renderItem={({ item }) => {
                        return this._getJournalsOfAction(item, identity)
                    }}

                    keyExtractor={item => `${item.id}`}

                />



            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    img: {
        width: 150,
        height: 150
    },

    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row'



    },




})

export default ActionDetail