import React from 'react';
import Post from '../../browser/components/Post';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const post = {
        _id: 1,
        author: 'author',
        post: 'text'
    };

    const component = renderer.create(
        <Post key={post._id} post={post} onClick={() => {}} authorization={{isLoggedIn :true}}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});