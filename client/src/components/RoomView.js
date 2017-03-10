import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class RoomView extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <LeftPanel />
                    <RightPanel />
                </div>
            </div>
        );
    }
}

export default RoomView;
