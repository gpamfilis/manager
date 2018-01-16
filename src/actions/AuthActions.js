import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';


export const emailChange = (text) => {
  return {
    type:EMAIL_CHANGED,
    payload:text
  };
};

export const passwordChange = (text) => {
  return {
    type:PASSWORD_CHANGED,
    payload:text
  };
};

export const loginUser = ({ email, password }) => {
  console.log('Attempting to loginUser');
  return (dispatch) => {
    console.log('login in');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(user => loginUserSuccess(dispatch,user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) =>{
  // console.log('Login Success');
  dispatch({
    type:LOGIN_USER_SUCCESS,
    payload: user
  });

  // Force us to the employe list
  Actions.main();

};

const loginUserFail = (dispatch) =>{
  // console.log('Login Fail');
  dispatch({type:LOGIN_USER_FAIL});
};
