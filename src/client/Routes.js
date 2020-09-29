
import React from 'react';
import App from './App'
import HomePage from './pages/HomePage/HomePage';
import UsersListPage from './pages/UsersListPage/UsersListPage';
// import LoadableContactUsPage from './pages/ContactUsPage/ContactUsPage';
import Loadable from 'react-loadable';
const loadDataFunctions = new Map()

const Loading = () => {
    return (
        <div>Loading</div>
    )
}

const LoadableContactUsPage = Loadable({
    loader: () => import('./pages/ContactUsPage/ContactUsPage').then(obj => {
        // console.log(obj.default.loadData)
        const loadData = obj.default.loadData;
        if (loadData) {
            loadDataFunctions.set('contactUsPage', loadData)
        } else {
            loadDataFunctions.set('contactUsPage', null)
        }
        console.log(loadDataFunctions.get('contactUsPage'));
        return obj.default.component
    }),
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
                loadData: loadDataFunctions.get('contactUsPage'),
                component: LoadableContactUsPage,
                path: "/contact-us",
                exact: true,
            },
            {
                ...UsersListPage,
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