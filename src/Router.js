import firebase from 'firebase';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm.js';
import LogoutForm from './components/LogoutForm.js';
import EmployeeList from './components/EmployeeList.js';

import EmployeeCreateForm from './components/EmployeeCreate.js';
import EmployeeEdit from './components/EmployeeEdit';

import {Confirm} from './components/common';

class RouterComponent extends Component {

  state = {showModal:false};

  onAccept() {
    this.setState({showModal:false});
    firebase.auth().signOut();
    Actions.auth();
  }

  onDecline(){
    this.setState({showModal:false});
  }

  onLogoutClick(){

    this.setState({showModal:true});

    return(
      <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}
      >
        Are you sure you want to eliminate them?
      </Confirm>
    );
  }


render() {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene key="login" component={ LoginForm } title="Please Login" initial />
          <Scene key="logout" component={ LogoutForm } title="Please Logout" leftTitle="Back" onLeft={()=> Actions.main() } />
        </Scene>

        <Scene style={styles.TextStyle} key="main" leftTitle="Logout" onLeft={()=> Actions.logout() }>
          <Scene
            initial
            rightTitle="Add"
            onRight={()=> Actions.employeeCreate() }
            key="employeeList"
            component={ EmployeeList }
            title="Employees"
          />

          <Scene
            leftTitle='' onLeft={()=> console.log('pennis') }
            key="employeeCreate"
            component={ EmployeeCreateForm }
            title="Create Employee"
          />

          <Scene
            leftTitle='' onLeft={()=> console.log('pennis') }
            key="employeeEdit"
            component={ EmployeeEdit }
            title="Edit Employee"
          />

        </Scene>
      </Scene>
    </Router>
  );
}
};


const styles = {
  TextStyle:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
};
export default RouterComponent;
