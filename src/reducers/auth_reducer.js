import ActionTypes from '../constants/action_types';

const initialState = {
  authenticated: false,
  error: ''
};

export function authReducer (state = initialState, action) {
  switch(action.type) {
    case ActionTypes.AuthUser: {
      return {
        ...state, 
        authenticated: true,
        error: ''
      }
    }
    case ActionTypes.SignOutUser: {
      return {
        ...state, 
        authenticated: false,
        error: ''
      }
    }
    case ActionTypes.AuthError: {
      return {
        ...state,
        authenticated: false,
        error: action.payload.error
      }
    }
    default: 
      return state;
  }
}