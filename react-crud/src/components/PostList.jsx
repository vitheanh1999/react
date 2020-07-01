import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    deletePost = (id) => {    
      this.props.deletePost(id);
      this.props.editPost(id);
    }
    render() {
        const {posts} = this.props;  
        return (
            <div className="col-md-8">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {posts.map((value) => (
                        <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">
                            {value.title}
                            </h5>
                        </div>
                        <div  className=" " >
                            <div className="card-body">
                            {value.content}
                            </div>
                        </div>
                            <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-primary" onClick={()=>this.editPost(value.id)}>Sửa</button>
                            <button type="button" className="btn btn-outline-danger " onClick={()=>this.deletePost(value.id)}>Xóa</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>

        );
    }
}

PostList.propTypes = {
    deletePost: PropTypes.func,
    editPost: PropTypes.func,
    posts: PropTypes.array,
    getPost: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
    return {
        data : state.data
    }
}
export default connect( mapStateToProps )(PostList);


