import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import AdministratorPage from './components/manupulation';

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
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={AdministratorPage} />
      </App>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));
