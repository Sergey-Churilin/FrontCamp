import {Link} from 'react-router-dom';
import React from 'react';
import {mapActionsToProps, mapStateToProps} from "../selectors/Selectors";
import {connect} from "react-redux";

class Menu extends React.Component {
    render() {
        const isLoggedIn = this.props.authorization.isLoggedIn;
        const loggedIn = isLoggedIn ? "" : "invisible";
        const loggedOut = isLoggedIn ? "invisible" : "";

        return (
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/main">All posts</Link>
                <Link to="/addPost" className={loggedIn}>Add post</Link>
                <Link to="/login" className={loggedOut}>Login</Link>
                <button className={loggedIn} onClick={()=>{this.props.logout()}}>Logout</button>
            </div>
        );

    }
}
module.exports = connect(mapStateToProps, mapActionsToProps)(Menu);