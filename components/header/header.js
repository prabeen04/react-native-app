import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
  render() {
    return (
      <View style={styles.headerBackground}>
        <Text style={styles.headerColor}> Gosimon </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerBackground: {
        backgroundColor: '#6423ce',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerColor: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    }
})
export default Header;