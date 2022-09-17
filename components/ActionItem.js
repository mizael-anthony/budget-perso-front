import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { listAction } from './API';


class ActionItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{}],
            query : this.props.query
        }

        this.state.query.then(response=>this.setState({data : response}))

        // listAction({ category: this.state.category }).then(response => {
        //     this.setState({ data: response })
        //     // console.log(response);
        // })

    }

    _renderActionList = (data) => {
        return (
            <TouchableOpacity
                onPress={
                    () => this.props.navigation.navigate('Détail', { action: data })}
            >
                <View>
                    <Image style={styles.img} source={{ uri: data.logo }} />
                    <Text>{data.name}</Text>

                </View>
            </TouchableOpacity>
        )

    }



    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => {
                    return this._renderActionList(item)
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
    }




})

export default ActionItem