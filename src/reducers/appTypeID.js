import { APP_TYPE_ID } from '../actions/types';

const INITIAL_STATE = {
  authenticated: ''
}
export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case APP_TYPE_ID :
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
}
