import React, {Component} from 'react';
import './FirstTest.scss';

class FirstTest extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="first-test">
                <h1>FirstTest Component</h1>
                <button onClick={()=>console.log('clicked !')}>Click Me</button>
            </div>
        )
    }
}

export default FirstTest;

