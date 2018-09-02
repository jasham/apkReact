import { STATUS_OF_APP_TYPE } from '../actions/types';

const INITIAL_STATE = {
    status : ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
      case STATUS_OF_APP_TYPE :
        return { ...state, status: action.payload };
      default:
        return state;
    }
}

  