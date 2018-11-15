import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Home from './Components/Home'
import Detail from './Components/Detail'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    );
  }
}

export default connect()(App);
// export default withRouter(connect()(App));
