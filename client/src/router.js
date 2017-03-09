import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Welcome from './components/Welcome';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import RequireAuth from './components/auth/RequireAuth';
import ChartView from './components/ChartView';

class RouterComponent extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Welcome} />
                    <Route path='signin' component={Signin} />
                    <Route path='signup' component={Signup} />
                    <Route path='signout' component={Signout} />
                    <Route path='chart' component={RequireAuth(ChartView)} />
                </Route>
            </Router>
        );
    }
}

export default RouterComponent;