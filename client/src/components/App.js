import React, { Component } from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <LeftPanel />
                        <RightPanel>
                            {this.props.children}
                        </RightPanel>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
