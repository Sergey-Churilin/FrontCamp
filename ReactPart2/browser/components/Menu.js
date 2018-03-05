import {Link} from 'react-router-dom';
import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">All</Link>
                <Link to="/posts">All posts</Link>
                <Link to="/addpost">Add post</Link>
            </div>
        );

    }
}

module.exports = Menu;