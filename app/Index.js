// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import { compose, createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import Reducers from './reducers';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';


// const logger = createLogger({});
// const middleware = [
//   thunkMiddleware,
//   logger,
// ];

// const createStoreWithMiddleware = compose(applyMiddleware(...middleware), autoRehydrate())(createStore);
// const store = createStoreWithMiddleware(Reducers);



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { persistStore, autoRehydrate } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './App.jsx';
import Reducers from './reducers';
import './styles/main.scss';

// const logger = createLogger({});
const middleware = [
  thunkMiddleware
];

const createStoreWithMiddleware = compose(applyMiddleware(...middleware))(createStore);

const store = createStoreWithMiddleware(Reducers);

// persistStore(store);

// let store = createStore(Reducers)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'),
);


