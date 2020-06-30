import React, { Component } from 'react';
import { firebaseConnect } from './firebaseConnect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <NoteList></NoteList>
            <NoteForm></NoteForm>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
