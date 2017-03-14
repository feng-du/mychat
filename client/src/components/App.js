import React, { Component } from 'react';
import Header from './Header';
import NavPanel from './NavPanel';

class App extends Component {
    render() {  
        return (
            <div>
                <Header />
                <NavPanel />
                {this.props.children}
            </div>
        );
    }
}

export default App;
