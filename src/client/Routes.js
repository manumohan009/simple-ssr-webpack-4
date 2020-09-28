
import React from 'react';
// import { Route } from 'react-router-dom';

import App from './App'
import HomePage from './pages/HomePage/HomePage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';

export default [
    {
        ...App,
        routes: [
            {
                path: "/",
                component: HomePage,
                exact: true,
            },
            {
                path: "/contact-us",
                component: ContactUsPage,
                exact: true,
            },
        ]
    }
]