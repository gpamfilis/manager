/* @flow */

import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm.js';
import RouterComponent from './Router.js';


class App extends Component {

  componentWillMount(){
    const config = {
    apiKey: "AIzaSyCLeuXXN3hN1d5fhfTM7Qv4AYQ27kvYHQU",
    authDomain: "manager-dc231.firebaseapp.com",
    databaseURL: "https://manager-dc231.firebaseio.com",
    projectId: "manager-dc231",
    storageBucket: "manager-dc231.appspot.com",
    messagingSenderId: "1050541747205"
  };


    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    console.log('App.js');
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
