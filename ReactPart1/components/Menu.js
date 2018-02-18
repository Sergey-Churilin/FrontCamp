import {Link} from 'react-router-dom';
import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul className="menu">
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/addpost">Add Post</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;
