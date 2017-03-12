import React, { Component } from 'react';
import Header from './Header';
import io from 'socket.io-client';


class App extends Component {
    render() {
        const socket = io('http://localhost:3010/chat',{
            query: `token=${localStorage.getItem('token')}`
        });
        socket.on('message', m => { console.log(m); });
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
