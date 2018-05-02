/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/header/header';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Header/>
        {/* <View style={styles.header}>
          <Text style={[styles.welcome, styles.whiteColor]}>
            Header Area
        </Text>
        </View> */}
        <View style={styles.body}>
          <Text style={styles.welcome}>
            Congratulation...
        </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.welcome}>
            Footer
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  whiteColor: {
    color: '#FFF'
  },
  header:{
    backgroundColor: '#333',
    flex: 1,
    flexBasis: '10%'
  },
  body:{
    backgroundColor: '#f4f4f4',
    flex: 1,
    flexBasis: '80%'
  },
  footer:{
    backgroundColor: '#333',
    flex: 1,
    flexBasis: '10%'
  },
  welcome:{
  }
});
