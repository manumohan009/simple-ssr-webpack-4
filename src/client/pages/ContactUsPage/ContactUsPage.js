import React, {Component} from 'react';
import Loadable from 'react-loadable';
import './ContactUsPage.scss';
const Loading = () =>{
    return(
        <div>Loading</div>
    )
}


const LoadableFirstTest = Loadable({
    loader: () => import('./../../components/FirstTest/FirstTest'),
    loading: Loading,
});
// import LoadableSecondTest from './../../components/SecondTest/SecondTest';
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

const loadData = ()=>{}

export default {
    loadData,
    component: ContactUsPage
};
// export default ContactUsPage

