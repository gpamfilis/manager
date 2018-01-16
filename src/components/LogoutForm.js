import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class LogoutForm extends Component {

  onLogoutPress(){
    firebase.auth().signOut();
    Actions.auth();
  }

  render() {
    return(
      <Card>
        <CardSection>
        <Button onPress = {this.onLogoutPress.bind(this)}>Click to Logout</Button>
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
};

export default LogoutForm;
