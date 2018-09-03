import { 
  AUTH_USER, FETCH_APP_TYPE, APP_TYPE_ID, 
  UPDATE_APP_TYPE, UPDATE_MODAL_STATE, 
  STATUS_OF_APP_TYPE, CATEGORY_GET_DATA, 
  ALL_CATEGORY_GET_DATA, ALL_APK_GET_DATA,
  ALL_CATEGORY_SPECIFIC_GET_DATA,
  GET_CATEGORY_DATA } from './types';
  
import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
  const response = await axios.post('http://localhost:8000/api/auth/jwt/', formProps);
  dispatch({ type : AUTH_USER, payload: response.data.token });
  localStorage.setItem('token', response.data.token);
  callback();
};

export const getCategory = () => async dispatch => {
  const response = await axios.get('http://localhost:8000/api/posts/categoryType/');
  dispatch({ type: GET_CATEGORY_DATA, payload : response.data });
}

export const refreshToken = () => async dispatch => {
  const token = localStorage.getItem('token')
  const response = await axios.post('http://localhost:8000/api/auth/jwt/refresh/',{token:token});
  localStorage.setItem('token', response.data.token);
};


export const appType = () => async dispatch => {
  const response = await axios.get('http://localhost:8000/api/posts/appType/');
  const token = localStorage.getItem('token');
  dispatch({ type: FETCH_APP_TYPE, payload: response.data });
};

export const addAppTypeData = (data) => async dispatch => {
  const token = localStorage.getItem('token')
  const headers = await {
    "Content-Type": "application/json",
    "Authorization": "JWT "+ token,
  }

  const response = await axios.post('http://localhost:8000/api/posts/appType/',  JSON.stringify(data),
    {
        headers: headers
    }
  ); 
  const resp = await axios.get('http://localhost:8000/api/posts/appType/');
  dispatch({ type: FETCH_APP_TYPE, payload: resp.data });
}

export const updateAppTypeData = (appData) => async dispatch => {

  const token = localStorage.getItem('token')

  const headers = await {
    "Content-Type": "application/json",
    "Authorization": "JWT "+ token,
  }
  const response = await axios.put(
    'http://localhost:8000/api/posts/appType/'+appData.id+'/',
    JSON.stringify(appData),
    {
        headers: headers
    }
  )
  const resp = await axios.get('http://localhost:8000/api/posts/appType/');
  dispatch({ type: FETCH_APP_TYPE, payload: resp.data });

};


export const deleteApkType = (appData) => async dispatch => {
  const token = localStorage.getItem('token')
  const headers = await {
    "Content-Type": "application/json",
    "Authorization": "JWT "+ token,
  }
  const response = await axios.delete(
    'http://localhost:8000/api/posts/appType/'+appData.id+'/',
    {
        headers: headers
    }
  )
  const resp = await axios.get('http://localhost:8000/api/posts/appType/');
  dispatch({ type: FETCH_APP_TYPE, payload: resp.data });

};

export const changeStatus = (status) => async dispatch => {
  dispatch({ type: STATUS_OF_APP_TYPE , payload: status });
};

export const categoryGetData = () => async dispatch => {
  const response = await axios.get('http://localhost:8000/api/posts/allCategory/')
  dispatch({ type: ALL_CATEGORY_GET_DATA, payload: response.data });
}


export const updateCategoryTypeData = (appData) => async dispatch =>{
  const token = localStorage.getItem('token')
  
  const headers = await {
      "Content-Type": "application/json",
      "Authorization": "JWT "+ token,
  }
  const cName = {
      "appType" : appData.appType,
      "categoryName" : appData.categoryName
  }
  const response = await axios.put(
      'http://localhost:8000/api/posts/categoryType/'+appData.categoryId+'/',
      JSON.stringify(cName),
      {
          headers: headers
      }
  )
  const resp = await axios.get('http://localhost:8000/api/posts/allCategory/')
  dispatch({ type: ALL_CATEGORY_GET_DATA, payload: resp.data });
}


export const addCategory = (appData) => async dispatch => {
  const token = localStorage.getItem('token')
  
  const headers = await {
      "Content-Type": "application/json",
      "Authorization": "JWT "+ token,
  }
  const cName = {
      "appType" : appData.appType,
      "categoryName" : appData.categoryName
  }
  const response = await axios.post(
      'http://localhost:8000/api/posts/categoryType/',
      JSON.stringify(cName),
      {
          headers: headers
      }
  )
  const resp = await axios.get('http://localhost:8000/api/posts/allCategory/')
  dispatch({ type: ALL_CATEGORY_GET_DATA, payload: resp.data });
}


export const deleteCategory = (appId) => async dispatch => {

  const token = localStorage.getItem('token')
  const headers = await {
    "Content-Type": "application/json",
    "Authorization": "JWT "+ token,
  }
  const response = await axios.delete(
    'http://localhost:8000/api/posts/categoryType/'+appId.id+'/',
    {
        headers: headers
    }
  )
  const resp = await axios.get('http://localhost:8000/api/posts/allCategory/')
  dispatch({ type: ALL_CATEGORY_GET_DATA, payload: resp.data });
}

export const getAllApkData = () => async dispatch => {
  const response = await axios.get('http://localhost:8000/api/posts/apkalldetail/')
  dispatch({ type: ALL_APK_GET_DATA, payload: response.data });
}

export const getSpecificApkData = (id) => async dispatch => {
  
  const token = localStorage.getItem('token')
  const headers = await {
    "Content-Type": "application/json",
    "Authorization": "JWT "+ token,
  }
  const response = await axios.get(
    'http://localhost:8000/api/posts/apkalldetail/'+id+'/',
    {
        headers: headers
    }
  )
  dispatch({ type: ALL_CATEGORY_SPECIFIC_GET_DATA, payload: response.data });
}

export const updateSpecificApkData = (data, id) => async dispatch => {
  
  const token = localStorage.getItem('token')
  const headers = await {
    "Content-Type": "multipart/form-data",
    "Authorization": "JWT "+ token,
  }
  const response = await axios.put(
    'http://localhost:8000/api/posts/apkspecificdetail/'+id+'/',
    data,
    {
        headers: headers
    }
  )

  const resp = await axios.get('http://localhost:8000/api/posts/apkalldetail/')
  dispatch({ type: ALL_APK_GET_DATA, payload: resp.data });
}

export const addAPK = (data) => async dispatch => {
  
  const token = localStorage.getItem('token')
  const headers = await {
    "Content-Type": "multipart/form-data",
    "Authorization": "JWT "+ token,
  }
  const response = await axios.post(
    'http://localhost:8000/api/posts/apkdetail/',
    data,
    {
        headers: headers
    }
  )

  const resp = await axios.get('http://localhost:8000/api/posts/apkalldetail/')
  dispatch({ type: ALL_APK_GET_DATA, payload: resp.data });
}

