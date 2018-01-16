import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChange(text);
  }

onPasswordChange(text){
  this.props.passwordChange(text)
}

onButtonPress(){
  console.log('Login Button Pressed.');

 const {email, password} = this.props;
 console.log(email, password);
 this.props.loginUser({email, password});

}

renderButton(){
  if (this.props.loading){
    return <Spinner size = 'large' />;
  }
return (
  <Button onPress = {this.onButtonPress.bind(this)}>
    Login
  </Button>
);
}
renderError(){
  if (this.props.error){
    return (
      <View style={{backgroundColor:'white'}}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }
}

  render() {
    return(
      <Card>
        <CardSection>
          <Input
          label='Email'
          placeholder='email@example.com'
          onChangeText = {this.onEmailChange.bind(this)}
          value = {this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
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

//         <Button onPress={this.onButtonPress.bind(this)}>Login</Button>

// const mapStateToProps = ({auth}) =>{
//   const {email, password, error, loading} = auth;
//   return {
//     email,
//     password,
//     error,
//     loading
//   };
// };

const mapStateToProps = state =>{
  return {
    email:state.auth.email,
    password:state.auth.password,
    error:state.auth.error,
    loading:state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChange,
  passwordChange,
  loginUser
})(LoginForm);
