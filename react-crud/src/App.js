import React, { Component } from 'react';
import { firebaseConnect } from './firebaseConnect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import PostFormContainer from './containers/PostFormContainer';
import ListPostContainer from './containers/ListPostContainer';
import PostEditContainer from './containers/PostEditContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <ListPostContainer></ListPostContainer>
            <PostFormContainer></PostFormContainer>
            <PostEditContainer></PostEditContainer>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
