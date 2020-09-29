
import React from 'react';
import App from './App'
import HomePage from './pages/HomePage/HomePage';
import UsersListPage from './pages/UsersListPage/UsersListPage';
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
            {
                path: "/users",
                component: UsersListPage,
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