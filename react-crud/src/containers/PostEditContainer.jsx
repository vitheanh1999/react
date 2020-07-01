import React, { Component } from 'react'
import PostEdit from '../components/PostEdit';
import { connect } from 'react-redux';
import { updatePost } from '../actions/PostActions';

class PostEditContainers extends Component {
    render() {
        const { updatePost } = this.props; 
        return (
            <PostEdit updatePost={updatePost}></PostEdit>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updatePost: (id,title,content) => {
            dispatch(updatePost(id,title,content))
        }
    }
}

export default connect(null,mapDispatchToProps)(PostEditContainers)

