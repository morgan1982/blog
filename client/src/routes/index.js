// HAVE TO REFACTOR THE ROUTES RIGHT NOW IT IS USELESS

import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Main from '../containers/main/main';
import Admin from '../containers/admin/admin';

export default () => (
    <Router>
        <Route exact path="/" component={Main} />
        <Route path="/Admin" component={Admin} />
    </Router>
)
