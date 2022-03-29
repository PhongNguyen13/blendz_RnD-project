import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Help from './pages/Help';
import About from './pages/About';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Cart from "./pages/Cart";

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <GlobalStyle />
      <Header/>
      <Router>    
          <Routes>
            <Route path="/" exact element={<Home />}> </Route>
            <Route path="/shop" exact element={<Shop />}> </Route>
            <Route path="/help" exact element={<Help />}> </Route>
            <Route path="/about" exact element={<About />}> </Route>
            <Route path="/login" exact element={<Login />}> </Route>
            <Route path="/register" exact element={<Register />}> </Route>
            <Route path="/resetpassword" exact element={<ResetPassword />}> </Route>
            <Route path="/cart" exact element={<Cart />}> </Route>
          </Routes>
      </Router>
      <Footer/>
    </Provider>
    )
  }
}

export default App;