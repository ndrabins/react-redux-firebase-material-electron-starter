import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Dashboard from '../containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />

        <Button>
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
