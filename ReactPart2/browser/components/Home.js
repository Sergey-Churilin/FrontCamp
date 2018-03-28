import React from 'react';
import Menu from './Menu';

class Home extends React.Component {
    render() {
        return (
            <div className="post">
                {
                    <div>
                        <Menu/>
                        <h2 className="center">Welcome to Posts Application</h2>
                    </div>
                }
            </div>
        );
    }
}

module.exports = Home;

