import { AUTH_USER } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state =INITIAL_STATE, action){
  switch (action.type) {
    case AUTH_USER:
      console.log("action payload ", action.payload,"state = ", { ...state });
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
}
