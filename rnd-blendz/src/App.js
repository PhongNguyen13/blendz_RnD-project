import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Header from './common/header/index.js'
import Home from './pages/home';
import Login from './pages/Login';

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        <Route path="/login" exact element={<Login />}> </Route>
        </Routes>
      </Router>
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