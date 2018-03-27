import React from 'react';
import { Redirect } from 'react-router';
import {mapStateToProps, mapActionsToProps} from '../selectors/Selectors';
import {connect} from "react-redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
        const arr = props;
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.props.login({username: this.refs.username.value, password: this.refs.password.value});
        this.refs.username.value = "";
        this.refs.password.value = "";
    }

    render() {
        const isLoggedIn = this.props.authorization.isLoggedIn;

        if (isLoggedIn) {
            return <Redirect to='/main'/>;
        }
        return (
            <div>
                <div className="addPost">
                    <h2>Login</h2>
                    <form onSubmit={this.submit}>
                        <input type="text" id="username" name="username" ref="username" placeholder="Username"/>
                        <input name="password" type="password" ref="password" placeholder="Password"/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = connect(mapStateToProps, mapActionsToProps)(Login);
Login.defaultProps = {
    username: "Username",
    password: "Password"
};

