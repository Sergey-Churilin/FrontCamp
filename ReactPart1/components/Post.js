import React from 'react';

class Post extends React.Component {
    render() {
        const post = this.props.post;

        return (
            <div className="post">
                {
                    <div>
                        <h3 className="author">{post.author}</h3>
                        <div>{post.post}</div>
                        <button className="delete" onClick={()=>{console.log(this.props);this.props.deletePost(post.id)}}>X</button>
                    </div>
                }
            </div>
        );
    }
}
export default Post;

