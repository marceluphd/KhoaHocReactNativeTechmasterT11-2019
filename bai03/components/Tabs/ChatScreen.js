import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'

export default class ChatScreen extends Component {
    render() {
        return <View style={styles.container}>
            <Text>
                ChatScreen
            </Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
})