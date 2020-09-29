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
                ContactUs Page
                <LoadableFirstTest />
                <LoadableSecondTest /> <br/>
                <button onClick={()=>{this.props.history.push('/')}}>Go to Home page</button>
                <button onClick={()=>{this.props.history.push('/users')}}>Go to UsersList page</button><br/>
            </div>
        )
    }
}

const loadData = ()=>{}

export default ContactUsPage
// export default ContactUsPage

