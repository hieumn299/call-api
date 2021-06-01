import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React, { Component } from 'react';

class App extends Component {
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return <Route key={index} path={item.path} exact={item.exact} component={item.main}></Route>
      })
    }
    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <Router>
        <Menu></Menu>
        <div className="container">
          <div className="row">
            {this.showContentMenu(routes)}
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
