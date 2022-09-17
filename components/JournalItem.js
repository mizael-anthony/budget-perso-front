import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class JournalItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            query: this.props.query

        }

        this.state.query.then(response => this.setState({ data: response }))



    }
    _renderJournalList = (data) => {
        const action = JSON.parse(JSON.stringify(data.action))

        // console.log(action.name);
        return (
            <View>
                <TouchableOpacity
                    onPress={
                        () => { }
                    }
                    style={styles.container}
                >
                    <View style={styles.west}>
                        <Image style={styles.img} source={{ uri: action.logo }} />
                        <Text style={styles.myfontsize}>{action.name}</Text>
                    </View>
                    <View style={styles.est}>
                        <Text style={[styles.mycolor, styles.blue, styles.myfontsize2]}>{data.date}</Text>
                        <Text style={[styles.mycolor, styles.green, styles.myfontsize2]}>Ar {data.cost}</Text>
                    </View>
                </TouchableOpacity>


            </View>
        )

    }



    render() {
        return (

            <FlatList
                data={this.state.data}
                renderItem={({ item }) => {
                    return this._renderJournalList(item)
                }}

                keyExtractor={item => `${item.id}`}

            />


        );
    }
}


const styles = StyleSheet.create({

    img: {
        width: 50,
        height: 50
    },

    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row'



    },

    west:{
        flex: 1,
        flexDirection: 'row'
    },

    est: {
        flex: 1,
        
        alignItems: 'flex-end'


    },

    myfontsize:{
        fontWeight: 5,
        fontSize: 25,
    },

    myfontsize2:{
        fontWeight: 5,
        fontSize: 20,
    },


    white:{
        color : 'white',
    },


    purple:{
        color: 'purple',
        
    },

    green : {
        color : 'green'
    },


    blue: {
        color : '#00F'
    }




})

export default JournalItem