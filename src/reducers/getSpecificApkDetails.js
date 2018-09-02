import { ALL_CATEGORY_SPECIFIC_GET_DATA } from '../actions/types';

const INITIAL_STATE = {
    specificapkGetData: ''
}
export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case ALL_CATEGORY_SPECIFIC_GET_DATA :
      return { ...state, specificapkGetData: action.payload };
    default:
      return state;
  }
}
  