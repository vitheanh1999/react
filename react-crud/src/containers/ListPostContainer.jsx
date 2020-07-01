import React, { Component } from 'react'
import {connect} from 'react-redux';
import PostList from '../components/PostList';
import { deletePost,editPost } from '../actions/PostActions';

class ListPostContainers extends Component {
    render() {
        const {posts,deletePost,editPost} = this.props; 
        return (
            <PostList posts={posts} deletePost={deletePost} editPost={editPost}></PostList>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        },
        editPost: (id) => {
            dispatch(editPost(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListPostContainers)
