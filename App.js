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
  View,
  Image
} from 'react-native';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Avatar, Button } from 'react-native-elements'

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
        <Header />
        <View style={styles.body}>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
          <Text>
            Congratulation...
        </Text>
          <Avatar
            small
            rounded
            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Button
            title='BUTTON' />
        </View>
        <Footer />
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
  body: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    flexBasis: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
