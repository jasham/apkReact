import { GET_CATEGORY_DATA } from '../actions/types';

const INITIAL_STATE = {
    categoryData : ''
}
export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case GET_CATEGORY_DATA :
      return { ...state, categoryData : action.payload };
    default:
      return state;
  }
}
  