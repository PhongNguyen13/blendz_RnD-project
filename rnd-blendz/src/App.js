import React, { Component } from "react";
import Header from './common/header/index.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Shop from './pages/shop'


class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <Header />
        <div>
        <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        <Route path="/shop" exact element={<Shop />}> </Route>


        </Routes>
        </div>
      </Router>
      </div>
    )
  }
}

export default App;