import React, {Component} from 'react';
import './ContactUsPage.scss';
const Loading = () =>{
    return(
        <div>Loading</div>
    )
}

import Loadable from 'react-loadable';
const LoadableFirstTest = Loadable({
    loader: () => import('./../../components/FirstTest/FirstTest'),
    loading: Loading,
});
const LoadableSecondTest = Loadable({
    loader: () => import('./../../components/SecondTest/SecondTest'),
    loading: Loading,
});

class ContactUsPage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="contactus-page">
                ContactUs Page 1
                <LoadableFirstTest />
                <LoadableSecondTest /> <br/>
                <button onClick={()=>{this.props.history.push('/')}}>Go to Home page</button>
            </div>
        )
    }
}

export default ContactUsPage;

