/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  handleclick() {
    console.log('clicked!');
  }
  render() {
    return (
      <View accessible={true} style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.handleClick}
          testId="signUpButton"
          accessibilityLabel="signUpButton"
        >
          <Text style={styles.text}>Click me!</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn: {
    padding: 20,
    marginVertical: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'tomato',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
