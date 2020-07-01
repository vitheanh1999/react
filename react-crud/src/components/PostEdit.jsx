import React, { Component } from 'react'

export default class PostEdit extends Component {
    render() {
        return (
            <div className="col-md-4">
            <h3>Sửa nội nội dung note</h3>
            <div className="form-group">
                <label htmlFor>Tiêu đề note</label>
                <input type="text" name="noteTitle" id="noteTitle" className="form-control" aria-describedby="helpId" onChange={event => this.isChange(event)} />
            </div>
            <div className="form-group">
                <label htmlFor>Nội dung note</label>
                <textarea type="text" name="noteContent" id="noteContent" className="form-control"  aria-describedby="helpId"  defaultValue={""} onChange={event => this.isChange(event)}/>
            </div>
            <button type="button" className="btn btn-primary">Submit</button>

        </div>

        )
    }
}
