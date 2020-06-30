import React, { Component } from 'react';
import News from './News';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <News>
          {this.props.data}
      </News>
      </div>
   
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num
  }
}
export default connect(mapStateToProps)(App);