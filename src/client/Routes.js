
import React from 'react';
import App from './App'
import HomePage from './pages/HomePage/HomePage';
// import LoadableContactUsPage from './pages/ContactUsPage/ContactUsPage';
import Loadable from 'react-loadable';

const Loading = () =>{
    return(
        <div>Loading</div>
    )
}


const LoadableContactUsPage = Loadable({
    loader: () => import('./pages/ContactUsPage/ContactUsPage'),
    loading: Loading,
});

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
                component: LoadableContactUsPage,
                exact: true,
            },
            // {
            //     path: "/myaccount",
            //     component: LoadableContactUsPage,
            //     exact: true,
            // },
        ]
    }
]