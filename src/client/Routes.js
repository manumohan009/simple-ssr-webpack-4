
import React from 'react';
import App from './App'
import HomePage from './pages/HomePage/HomePage';
// import LoadableUsersListPage from './pages/UsersListPage/UsersListPage';
// import LoadableContactUsPage from './pages/ContactUsPage/ContactUsPage';
import Loadable from 'react-loadable';

const Loading = () => {
    return (
        <div>Loading</div>
    )
}

// const LoadableContactUsPage = Loadable({
//     loader: () => import('./pages/ContactUsPage/ContactUsPage').then(obj => {
//         const loadData = obj.default.loadData;
//         if (loadData) {
//             loadDataFunctions.set('ContactUsPage', loadData)
//         } else {
//             loadDataFunctions.set('ContactUsPage', null)
//         }
//         return obj.default.component
//     }),
//     loading: Loading,
// });

import ContactUsPageLoadData from './pages/ContactUsPage/ContactUsPageLoadData';
const LoadableContactUsPage = Loadable({
    loader: () => import('./pages/ContactUsPage/ContactUsPage'),
    loading: Loading,
})

import UsersListPageLoadData from './pages/UsersListPage/UsersListLoadData';
const LoadableUsersListPage = Loadable({
    loader: () => import('./pages/UsersListPage/UsersListPage'),
    loading: Loading,
});






export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true,
            },
            {
                // ...LoadableContactUsPage,
                loadData: ContactUsPageLoadData,
                component: LoadableContactUsPage,
                path: "/contact-us",
                exact: true,
            },
            {
                // ...UsersListPage,
                loadData: UsersListPageLoadData,
                component: LoadableUsersListPage,
                path: "/users",
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