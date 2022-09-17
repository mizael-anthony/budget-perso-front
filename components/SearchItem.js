
import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { searchAction } from './API'
import {Form} from 'react-bootstrap'

// Mila averina fa mitovy amle JournalItem le code
export default class SearchItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            maxCost: '',
            minCost: '',
            maxDate: '',
            minDate: '',
            isCustomSearch: false,
            data: null
        }
    }

    _searchedAction = () => {
        const action = this.state
        searchAction(action).then(response => this.setState({ data: response }))


    }

    _renderJournalList = (data) => {
        // const action = JSON.parse(JSON.stringify(data.action))
        // console.log(action.name);
        // console.log(data);
        return (
            <View>
                <TouchableOpacity
                    onPress={
                        () => this.props.navigation.navigate('Détail', { action: data })}
                >
                    <Image style={styles.img} source={{ uri: data.logo }} />
                    <Text>{data.name}</Text>
                </TouchableOpacity>


            </View>
        )

    }

    _setCustomSearch = () => {
        this.setState((state) => {
            
            if (state.isCustomSearch === false)
                return { isCustomSearch: true, data: null }
            return { isCustomSearch: false, data: null }
        })
    }





    render() {
        return (
            <ScrollView>
                <TouchableOpacity
                    style={{backgroundColor: 'blue'}}
                    onPress={() => this._setCustomSearch()}
                >
                    <Text style={{color: 'white', fontSize:25, textAlign:'center'}}>{
                        (this.state.isCustomSearch) ?
                            "Basique" : "Avancé"

                    }</Text>
                </TouchableOpacity>
                {
                    (this.state.isCustomSearch) ?
                        <View>
                            <Form.Control
                                as="select"
                                onChange={e => this.setState({category : e.target.value})}
                                required>
                                <option value="">Catégorie..</option>
                                <option value="charge">Dépense</option>
                                <option value="produit">Revenu</option>
                                

                            </Form.Control>

                            <TextInput style={styles.text}
                                placeholder='montant supérieur ou égal à ..'
                                onChangeText={(value) => this.setState({ maxCost: value })}

                            />

                            <TextInput style={styles.text}
                                placeholder='montant inférieur ou égal à..'
                                onChangeText={(value) => this.setState({ minCost: value })}

                            />

                            <TextInput style={styles.text}
                                placeholder='date récente..'
                                onChangeText={(value) => this.setState({ maxDate: value })}

                            />

                            <TextInput style={styles.text}
                                placeholder='date ancienne..'
                                onChangeText={(value) => this.setState({ minDate: value })}

                            />

                            <TouchableOpacity
                            style={{backgroundColor: 'blue'}}
                            
                                onPress={()=>{this._searchedAction()}}
                            >
                                <Text style={{color: 'white', fontSize:25, textAlign:'center'}}>Rechercher</Text>
                            </TouchableOpacity>

                        </View>
                        :
                        <View>
                            <TextInput style={styles.text}
                                placeholder="Nom de l'activité.."
                                onChangeText={(value) => {
                                    if (value) {
                                        this.setState({ name: value })
                                        this._searchedAction()
                                    }
                                    else {
                                        this.setState({ data: null })
                                    }

                                }}
                            />
                        </View>

                }
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return this._renderJournalList(item)
                    }}

                    keyExtractor={item => `${item.id}`}

                />




            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({

    img: {
        width: 50,
        height: 50
    },


    text:{
        fontSize: 30,
        borderWidth: 2,
        borderRadius: 1,
        borderColor: null,
        marginTop: 5,
        textAlign: 'center'

    }




})