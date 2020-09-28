import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        // console.log(this.props,'props')
    }
    render() {
        return (
            <div className="App">
                <h1>My APP</h1>
                <div className="">{renderRoutes(this.props.route.routes)}</div>
            </div>

        )
    }
}

export default {
    component: App
}