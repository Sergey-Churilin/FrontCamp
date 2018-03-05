import React from 'react';
import Menu from './Menu';
import {mapStateToProps, mapActionsToProps} from '../selectors/Selectors';
import {connect} from "react-redux";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        const arr = props;
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.props.addPost({author: this.refs.author.value, post: this.refs.post.value});
        this.refs.author.value = "";
        this.refs.post.value = "";
    }

    render() {
        return (
            <div>
                <Menu/>
                <div className="addPost">
                    <h2>Add post</h2>
                    <form onSubmit={this.submit}>
                        <input type="text" id="author" name="author" ref="author" placeholder="author name"/>
                        <textarea name="post" ref="post" placeholder="post"/>
                        <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = connect(mapStateToProps, mapActionsToProps)(AddPost);
AddPost.defaultProps = {
    author: "Anonim",
    post: "post"
};

