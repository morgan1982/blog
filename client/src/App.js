import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Footer from './components/footerComponent/footer';
import Admin from './containers/admin/admin';
import Test from './components/test/testing';


import './Assets/css/default.min.css';
// import './Assets/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header />
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/Products' component={Products}/>
              <Route exact path='/Admin' component={Admin}/>
              <Route exact path='/Testing' component={Test}/>                              
            <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
