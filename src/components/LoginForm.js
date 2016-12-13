import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  state = { email: '', password: '' };

  onButtonPress() {
const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection >
          <Input
            // passing info as props
            placeholder="user@gmail.com"
            label="Email"

            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>

        <CardSection >
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection >
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
