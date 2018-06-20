import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/default.min.css';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Footer from './components/footerComponent/footer';
import Admin from './containers/admin/admin';
import Test from './components/test/testing';
import Preview from './containers/admin/previewPost';
import AdminTest from './containers/admin/test';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';



ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                            <Switch>
                                <Route exact path='/' component={Homepage}/>
                                <Route exact path='/Products' component={Products}/>
                                <Route exact path='/Admin' component={Admin}/>
                                <Route path='/Admin/Preview' component={Preview}/>
                                <Route exact path='/Admin/Test' component={AdminTest}/>
                                <Route exact path='/Testing' component={Test}/>
                            </Switch>
                        <Footer/>
                    </div>
                </Router>
            </Provider>,
             document.getElementById('root'));
registerServiceWorker();


