import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './../../actions/index';

import './UsersListPage.scss';

class UsersListPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='users-list-page'>
                Users List
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
}
