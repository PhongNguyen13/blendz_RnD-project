import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Shop from './pages/Shop';
import Help from './pages/Help';
import About from './pages/About';
import Login from "./pages/login/login.js";

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        <Route path="/shop" exact element={<Shop />}> </Route>
        <Route path="/help" exact element={<Help />}> </Route>
        <Route path="/about" exact element={<About />}> </Route>
        <Route path="/login" exact element={<Login />}> </Route>
        </Routes>
      </Router>
      <Footer/>
    </Provider>
    )
  }
}

export default App;


{/* 
      <div>
      <Router>
        <Header />
        <div>
        <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        </Routes>
        </div>
      </Router>
      </div>



*/}