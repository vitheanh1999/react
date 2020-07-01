import React, { Component } from 'react';
import { firebaseConnect } from './firebaseConnect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import PostFormContainer from './containers/PostFormContainer';
import ListPostContainer from './containers/ListPostContainer';


class App extends Component {
  render() {
    const {data} = this.props; 
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="row">
            <ListPostContainer></ListPostContainer>
            <PostFormContainer></PostFormContainer>
            
          </div>
      </div>
      </div>
    );
  }
}


export default App;
