import React, { Component } from 'react';

class NoteForm extends Component {
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
         console.log(item);
         
     }
    render() {
        const {noteTitle,noteContent}=this.state;
        return (
           <div className="col-md-4">
                <h3>Sửa nội dung note</h3>
                <div className="form-group">
                    <label htmlFor>Tiêu đề note</label>
                    <input type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder aria-describedby="helpId" onChange={event => this.isChange(event)} />
                    <small id="helpId" className="text-muted">Help text</small>
                </div>
                .<div className="form-group">
                    <label htmlFor>Nội dung note</label>
                    <textarea type="text" name="noteContent" id="noteContent" className="form-control" placeholder aria-describedby="helpId"  defaultValue={""} onChange={event => this.isChange(event)}/>
                    <small id="helpId" className="text-muted">Help text</small>
                </div>
                <button onClick={() => this.addData(noteTitle,noteContent)} type="button" className="btn btn-primary">Submit</button>

            </div>

        );
    }
}

export default NoteForm;
