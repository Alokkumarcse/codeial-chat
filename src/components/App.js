import React, { Component } from 'react'

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

/**
 * map the state we want to pass as props to <App /> component using mapStateToProps(redux-store's state) callback method,
 * which is given as argument in connect() method.
 * mapStateToProps(redux-store's state) method  return selected states's object from redux store state.
 * Connect the App component with redux store using connect() method.
 */
function mapStateToProps(state){
  return {
    posts: state.posts,
  }
}

// connect(callback)(component) method write this way which is return connected component.

export default connect(mapStateToProps)(App);
