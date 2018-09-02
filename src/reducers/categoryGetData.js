import { ALL_CATEGORY_GET_DATA } from '../actions/types';

const INITIAL_STATE = {
    categoryGetData: ''
}
export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case ALL_CATEGORY_GET_DATA :
      return { ...state, categoryGetData: action.payload };
    default:
      return state;
  }
}
  