import React, { Component } from "react";
import Header from './common/header/index.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Help from './pages/help';
import About from './pages/about';
import Login from "./pages/login/index.js";
import Cart from "./pages/cart/index.js";
import Footer from "./common/footer/index.js";


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
        <Route path="/help" exact element={<Help />}> </Route>
        <Route path="/about" exact element={<About />}> </Route>
        <Route path="/login" exact element={<Login />}> </Route>
        <Route path="/cart" exact element={<Cart />}> </Route>
        </Routes>
        <Footer />
        </div>
      </Router>
      </div>
    )
  }
}

export default App;