import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
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
     
     addData=(title,content)=>{
         var item={};
         item.title = title;
         item.content = content;
         this.props.addPost(title,content); 
     }
    render() {
        const {noteTitle,noteContent}=this.state;
        return (
           <div className="col-md-4">
                <h3>Thêm nội dung note</h3>
                <div className="form-group">
                    <label htmlFor>Tiêu đề note</label>
                    <input type="text" name="noteTitle" id="noteTitle" className="form-control" aria-describedby="helpId" onChange={event => this.isChange(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor>Nội dung note</label>
                    <textarea type="text" name="noteContent" id="noteContent" className="form-control"  aria-describedby="helpId"  defaultValue={""} onChange={event => this.isChange(event)}/>
                </div>
                <button onClick={() => this.addData(noteTitle,noteContent)} type="button" className="btn btn-primary">Submit</button>

            </div>

        );
    }
}

PostForm.propTypes={
    addPost:PropTypes.func,
}
export default PostForm;
