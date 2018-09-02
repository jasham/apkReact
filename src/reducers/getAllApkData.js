import { ALL_APK_GET_DATA } from '../actions/types';

const INITIAL_STATE = {
    apkGetData: ''
}
export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case ALL_APK_GET_DATA :
      return { ...state, apkGetData: action.payload };
    default:
      return state;
  }
}
  