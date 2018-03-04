import { Link, BrowserRouter } from 'react-router-dom';
import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="menu">
                    <Link to="/">All</Link>
                    <Link to="/posts">All posts</Link>
                    <Link to="/addpost">Add post</Link>
                </nav>
            </BrowserRouter>
        );

    }
}

module.exports = Menu;