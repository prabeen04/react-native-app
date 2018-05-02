import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
  render() {
    return (
      <View>
        <Text> Header Component </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerBackground: {
        backgroundColor: '#333'
    },
    headerColor: {
        color: '#fff'
    }
})
export default Header;