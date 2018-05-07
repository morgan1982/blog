import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from '../../components/headerComponent/header';
import Homepage from '../../components/pages/homePage';
import Products from '../../components/pages/products';
import Footer from '../../components/footerComponent/footer';
import Customers from '../../components/customers/customers';


class Main extends Component {


    state = {
        admin: false
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/Products' component={Products}/>         
                    <Customers />
                    <Footer/>
                </div>
            </Router>

    );
  }
}

export default Main;
