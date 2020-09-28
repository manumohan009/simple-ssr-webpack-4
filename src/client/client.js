import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'; // used to renderRoute in SSR
import App from './App';
import Routes from './Routes';

ReactDOM.hydrate(
    <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>,
    document.querySelector('#root')
);

// loadableReady(() => {
//     const root = document.querySelector('#root')
//     hydrate(<BrowserRouter>
//         <div>{renderRoutes(Routes)}</div>
//     </BrowserRouter>, root)
// })