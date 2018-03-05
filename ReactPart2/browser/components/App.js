import React from 'react';
import Post from './Post';
import Menu from './Menu';
import Filter from './Filter';
import AddPost from './AddPost';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from '../selectors/Selectors';

class App extends React.Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render() {
        const posts = this.props.appPosts.posts;
        const postsArray = [];

        const filteredPosts = posts.filter((post) => post.visible);

        filteredPosts.forEach(function(post, index){
            postsArray.push(<Post key={index} post={post} deletePost={this.props.deletePost}/>);
        }.bind(this));

        return (
            <div><Menu />
                <h1 className="title">Posts application</h1>
                {postsArray}
                <Filter filterPosts={this.props.filterPosts}/>
                <AddPost addPost={this.props.addPost}/>
            </div>
        )

    }
}

module.exports = connect(mapStateToProps, mapActionsToProps)(App);