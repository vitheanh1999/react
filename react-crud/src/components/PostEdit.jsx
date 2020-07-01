import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
            noteTitle:'',
            noteContent:''
        }
    }
     isChange=(event)=>{
         const name = event.target.name;
         const value = event.target.value;
         this.setState({
             [name]:value
         });   
     }
     editData=(id,title,content)=>{   
         const newPost=this.state.noteTitle;
         const newContent=this.state.noteContent; 
          
        this.props.updatePost(id, newPost,newContent);   
    }
    render() {
        const {post} = this.props;  
        return (
            post.map(value =>(
            value.editStatus ?
           (
            <div className="">
            <h3>Sửa nội nội dung note</h3>
            <div className="form-group">
                <label htmlFor>Tiêu đề note</label>
                <input type="text" name="noteTitle" id="noteTitle" className="form-control" aria-describedby="helpId"
                 onChange={event => this.isChange(event)} 
                 defaultValue={value.title}
                 />
            </div>
            <div className="form-group">
                <label htmlFor>Nội dung note</label>
                <textarea type="text" name="noteContent" id="noteContent" className="form-control"  aria-describedby="helpId"  
                defaultValue={value.content} 
                onChange={event => this.isChange(event)}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={()=> this.editData(value.id,value.title,value.content)}>Submit</button>

            </div>
           )
           :''
            ))
         

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state
    }
}

export default connect(mapStateToProps)(PostEdit)