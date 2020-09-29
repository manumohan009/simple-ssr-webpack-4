import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

import './UsersListPage.scss';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    head() {
        return (
            <div>
                <title>{`${this.props.users.length} Users Loaded`}</title>
            </div>
        );
    }

    render() {
        return (
            <div id='users-list-page'>
                {this.head()}
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
                <button onClick={()=>{this.props.history.push('/')}}>Go to Home page</button>
                <button onClick={()=>{this.props.history.push('/contact-us')}}>Go to Contact us page</button><br/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

// function loadData(store) {
//     return store.dispatch(fetchUsers());
// }

export default connect(mapStateToProps, { fetchUsers })(UsersListPage)

