import React from 'react';
import {mapActionsToProps, mapStateToProps} from "../selectors/Selectors";
import {connect} from "react-redux";

class Post extends React.Component {
    render() {
        const post = this.props.post;
        const visible = this.props.authorization.isLoggedIn;
        const className = visible ? "delete" : "delete invisible";
        return (
            <div className="post">
                {
                    <div>
                        <h3 className="author">{post.author}</h3>
                        <div>{post.post}</div>
                        <button className={className} onClick={()=>{this.props.deletePost(post._id,this.props.authorization.token)}}>X</button>
                    </div>
                }
            </div>
        );
    }
}

module.exports = Post;

