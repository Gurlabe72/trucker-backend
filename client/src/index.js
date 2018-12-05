import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import Dashboard from './DashBoard/components/index';
import Orders from '././Orders/components/index';
import Navbar from './common/Navbar.jsx'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    
        <Router> 
            <div>
                <Navbar> </Navbar>
                <Switch>
                    <Route path="/" components={App}></Route>
                    <Route path="/dashboard" component={Dashboard}> </Route>
                    <Route path="/orders" components={Orders}></Route>

                </Switch>
            </div>
        </Router>
    
    
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
