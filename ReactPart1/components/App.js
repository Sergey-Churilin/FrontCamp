import React from 'react';
import Post from './Post'
import AddPost from './AddPost'
import Filter from './Filter'
import postsStore from './store';
const uuidV4 = require('uuid/v4');
class App extends React.Component {
    constructor(props){
        super(props);

        this.state = postsStore;
        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
        this.filterPost = this.filterPost.bind(this);
    }

    addPost(postData){
        let filter = this.state.filter;
        const newPost = {
            id: uuidV4(),
            author : postData.author,
            post : postData.post,
            visible: postData.author === filter || filter === ""
        };

        let posts = this.state.posts;
        posts.push(newPost);
        this.setState({posts:posts});
    }

    deletePost(id){
        let posts =  this.state.posts;
        let aNewPosts = posts.filter((post) => post.id !== id);
        this.setState({posts:aNewPosts});
    }

    filterPost(author){
        let posts =  this.state.posts;
        posts.forEach((post) => post.visible = post.author.toLowerCase().indexOf(author.toLowerCase()) >=0  || author === "");
        this.setState({posts:posts});
    }

    render() {
        const posts = this.state.posts;
        const postsArray = [];

        const filteredPosts = posts.filter((post) => post.visible);

        filteredPosts.forEach(function(post, index){
            postsArray.push(<Post key={index} post={post} deletePost={this.deletePost}/>);
        }.bind(this));

        return (
            <div>
                <h1 className="title">Posts application</h1>
                {postsArray}
                <AddPost addPost={this.addPost}/>
                <Filter filterPost={this.filterPost}/>
            </div>
        )

    }
}

export default App;