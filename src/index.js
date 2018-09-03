import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import AdministratorPage from './components/manupulation/manupulation';
import ActionBar from './components/manupulation/navigation/actionBar';
//import ApkType from './components/manupulation/apkType/apktype';
import ApkType from './components/admin/appType/main/appType';
//import CategoryType from './components/manupulation/categorytype/categoryType';
import CategoryType from './components/admin/categoryType/main/categoryType';
import AddApk from './components/admin/addApk/main/addApk';
import Front from './components/front/main/front';


const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={ store } >
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Front} />
        <Route path="/admin" component={AdministratorPage} />
        <Route path="/admin/detailpage" component={ActionBar} />
        <Route path="/appType" component={ApkType} />
        <Route path="/categorytype" component={CategoryType} />
        <Route path="/addapk" component={AddApk} />
      </App>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));
