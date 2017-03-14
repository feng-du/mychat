import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import IndexView from './components/IndexView';
import SigninView from './components/SigninView';
import SignupView from './components/SignupView';
import SignoutView from './components/SignoutView';
import RequireAuth from './components/auth/RequireAuth';
import RoomView from './components/RoomView';
import ChatView from './components/ChatView';

class RouterComponent extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={IndexView} />
                    <Route path='signin' component={SigninView} />
                    <Route path='signup' component={SignupView} />
                    <Route path='signout' component={SignoutView} />
                    <Route path='room' component={RequireAuth(RoomView)} />
                    <Route path='chat/:room' component={RequireAuth(ChatView)} />
                </Route>
            </Router>
        );
    }
}

export default RouterComponent;