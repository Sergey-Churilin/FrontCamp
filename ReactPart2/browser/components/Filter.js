import React from 'react';
import {mapActionsToProps, mapStateToProps} from "../selectors/Selectors";
import {connect} from "react-redux";
class Filter extends React.Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        const value = this.refs.author.value;
        this.props.filterPosts(value);
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

module.exports = connect(mapStateToProps, mapActionsToProps)(Filter);

