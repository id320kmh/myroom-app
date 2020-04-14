import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import './index.css';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/rootReducer';
import {BrowserRouter} from 'react-router-dom';
import { save } from 'redux-localstorage-simple';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(
      thunk,  
      save({ namespace: 'basket' })
      )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

render(
  app,
  document.getElementById('root')
);
