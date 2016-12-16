import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnJSTTFkCRFzJrwAuoxcicpxBCiUEZOcc',
      authDomain: 'auth-b0612.firebaseapp.com',
      databaseURL: 'https://auth-b0612.firebaseio.com',
      storageBucket: 'auth-b0612.appspot.com',
      messagingSenderId: '17138977706'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button whenPressed={() => firebase.auth().signOut()}>
              "Log Out"
            </Button>
          </CardSection>
        );
      case false:
        // not loggedIn
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
