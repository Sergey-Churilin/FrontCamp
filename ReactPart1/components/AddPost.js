;import React from 'react';
class AddPost extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        this.props.addPost({author:this.refs.author.value,post:this.refs.post.value});
        this.refs.author.value = "";
        this.refs.post.value = "";
    }

    render() {
        return (
            <div className="addPost">
                <h2>Add post</h2>
                <form onSubmit={this.submit}>
                    <input type="text" id="author" name="author" ref="author" placeholder="author name"/>
                    <textarea name="post" ref="post" placeholder="post"/>
                    <button>Add</button>
                </form>

            </div>
        );
    }
}

export default AddPost;
AddPost.defaultProps = {
    author: "Anonim",
    post : "post"
};

