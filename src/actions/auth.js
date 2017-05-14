import request from 'superagent';
import { push } from 'react-router-redux';

import store from '../store/store';
import database from './database';
import ActionTypes from '../constants/action_types';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export function requestGifs(term = null) {
  return dispatch => {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.requestGifs,
        payload: response
      });
    });
  }
}

export function openModal(gif) {
  return {
    type: ActionTypes.OpenModal,
    gif
  }
}

export function closeModal() {
  return {
    type: ActionTypes.CloseModal
  }
}

export function signUpUser(credentials) {
  return dispatch => {
    database.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(response => {
      dispatch(authUser());
      store.dispatch(push('/favorites'));
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error));
    });
  }
}

export function signInUser(credentials) {
  return dispatch => {
    database.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((response) => {
      dispatch(authUser());
      store.dispatch(push('/favorites'));  
    })
    .catch((error) => {
      dispatch(authError(error));
    });
  }
}

export function signOutUser() {
  store.dispatch(push('/'));

  return {
    type: ActionTypes.signOutUser
  }
}

function authUser() {
  return {
    type: ActionTypes.AuthUser
  }
}

function authError(error) {
  return {
    type: ActionTypes.AuthError,
    payload: error
  }
}