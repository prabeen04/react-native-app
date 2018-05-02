import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
  render() {
    return (
      <View style={styles.headerBackground}>
        <Text style={styles.headerColor}> Header Component </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerBackground: {
        backgroundColor: '#e51948',
        padding: 20
    },
    headerColor: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export default Header;