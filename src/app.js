import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header} from './components/common';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCnJSTTFkCRFzJrwAuoxcicpxBCiUEZOcc',
    authDomain: 'auth-b0612.firebaseapp.com',
    databaseURL: 'https://auth-b0612.firebaseio.com',
    storageBucket: 'auth-b0612.appspot.com',
    messagingSenderId: '17138977706'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
