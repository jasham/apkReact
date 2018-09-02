import { AUTH_USER, FETCH_APP_TYPE } from '../actions/types';


const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state =INITIAL_STATE, action){
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case FETCH_APP_TYPE:
      return {...state, appTypedata: action.payload};
    default:
      return state;
  }
}
