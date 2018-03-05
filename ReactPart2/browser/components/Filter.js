import React from 'react';
class Filter extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        this.props.filterPosts(this.refs.author.value);
    }

    render() {
        return (
            <div className="filter">
                <form onChange={this.submit}>
                    <input type="search" id="author" name="author" ref="author"  placeholder="Author"/>
                </form>

            </div>
        );
    }
}

module.exports = Filter;

