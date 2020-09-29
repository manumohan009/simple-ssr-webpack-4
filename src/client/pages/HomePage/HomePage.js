import React, { Component } from 'react';
import Loadable from 'react-loadable';

import './HomePage.scss';
const Loading = () =>{
    return(
        <div>Loading</div>
    )
}


const LoadableFirstTest = Loadable({
    loader: () => import('./../../components/FirstTest/FirstTest'),
    loading: Loading,
});

class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="home-page">
                Home Page 
                <LoadableFirstTest /><br/>
                <button onClick={()=>{this.props.history.push('/contact-us')}}>Go to Contact us page</button>
                <button onClick={()=>{this.props.history.push('/users')}}>Go to UsersList page</button><br/>
            </div>
        )
    }
}

const loadData = ()=>{}

export default{
    loadData,
    component: HomePage
};

