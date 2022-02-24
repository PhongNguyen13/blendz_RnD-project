import React, { Component } from "react";
import Header from './common/header/index.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home'
import Shop from './pages/shop'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <Header></Header>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        </div>
      </Router>
    )
  }
}

export default App;
