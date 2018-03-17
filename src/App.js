import React, { Component } from 'react'
import { Provider } from 'react-redux'
import reduxStore from './Redux'
import RootContainer from './Containers/RootContainer'

const store = reduxStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
