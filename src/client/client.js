import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'; // used to renderRoute in SSR
import App from './App';
import Routes from './Routes';
import Loadable from 'react-loadable';

// ReactDOM.hydrate(
//     <BrowserRouter>
//         <div>{renderRoutes(Routes)}</div>
//     </BrowserRouter>,
//     document.querySelector('#root')
// );

// loadableReady(() => {
//     const root = document.querySelector('#root')
//     hydrate(<BrowserRouter>
//         <div>{renderRoutes(Routes)}</div>
//     </BrowserRouter>, root)
// })

Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>,
        document.querySelector('#root')
    );
});