import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col-md-8">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                    <div className="card-header" role="tab" id="section1HeaderId">
                        <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="section1ContentId">
                            Vi Thế Anh
                        </a>
                        </h5>
                    </div>
                    <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                        <div className="card-body">
                        Section 1 content
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" role="tab" id="section2HeaderId">
                        <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="section2ContentId">
                            Hà Xuân Việt
                        </a>
                        </h5>
                    </div>
                    <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                        <div className="card-body">
                        Section 2 content
                        </div>
                    </div>
                    </div>
                </div>
        </div>

        );
    }
}

export default NoteList;
