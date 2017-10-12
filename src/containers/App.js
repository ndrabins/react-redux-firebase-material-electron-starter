import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { withStyles } from "material-ui/styles";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./SignUp";
import Home from "./Home";

class App extends Component {
  render() {
    const { classes } = this.props;
    return <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>

    </div>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default withStyles(styles)(App);
