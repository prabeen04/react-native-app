import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Footer extends Component {
    render() {
        return (

            <View style={styles.footerBackground}>
                <Text style={styles.footerColor}> Footer Component </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerBackground: {
        backgroundColor: '#e51948',
        padding: 20
    },
    footerColor: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default Footer;