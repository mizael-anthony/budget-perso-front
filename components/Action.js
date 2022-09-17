import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'


class Action extends React.Component{



    render() {
        return (
            <View>
                <Text>Action</Text>
                <Button
                
                    title="Cliquer ici"
                    onPress={() => this.props.navigation.navigate('Journal')}
                />
            </View>    
        )
    }
}


const styles = StyleSheet.create({

})

export default Action