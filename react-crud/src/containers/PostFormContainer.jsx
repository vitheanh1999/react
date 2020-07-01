import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import { addPost } from '../actions/PostActions';

class PostFormContainer extends Component {
    render() {
        return (
            <PostForm addPost={this.props.addPost}></PostForm>
        )
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {
        addPost: (title,content) =>{
            dispatch(addPost(title,content));
        }
    }
}

export default connect(null,mapDispatchToProps)(PostFormContainer)

