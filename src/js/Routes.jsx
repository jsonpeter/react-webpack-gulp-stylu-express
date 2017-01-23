import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute,browserHistory } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './components/Index'

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="/foo" component={Footer}/>
        <Route path="/bar" component={Index}/>
    </Router>)
, document.getElementById('myApp'));
