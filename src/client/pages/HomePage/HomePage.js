import React, { Component } from 'react';


import './HomePage.scss';

class HomePage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="home-page">
                Home Page <br/>
                <button onClick={()=>{this.props.history.push('/contact-us')}}>Go to Contact us page</button>
            </div>
        )
    }
}

export default HomePage;

