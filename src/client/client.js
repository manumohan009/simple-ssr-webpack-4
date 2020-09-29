import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'; // used to renderRoute in SSR
import axios from 'axios';
import Loadable from 'react-loadable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import Routes from './Routes';
import reducers from './reducers';

const middlewares = [thunk.withExtraArgument(axios)];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <div>{renderRoutes(Routes)}</div>
            </BrowserRouter>
        </Provider>,
        document.querySelector('#root')
    );
});