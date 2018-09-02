import { combineReducers } from 'redux';
import auth from './auth';
import { reducer as formReducer } from 'redux-form';
import appTypeId from './appTypeID';
import appTypeStatus from './appTypeStatus';
import categoryGetData from './categoryGetData';
import apkGetData from './getAllApkData';
import specificapkGetData from './getSpecificApkDetails';

export default combineReducers({
  auth,
  form : formReducer,
  appId : appTypeId,
  appTypeStatus: appTypeStatus,
  categoryGetData,
  allApkdata : apkGetData,
  specificapkGetData
});
