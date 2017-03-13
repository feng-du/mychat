import React, { Component } from 'react';
import { 
    SideBar, 
    Card, 
    CardItem 
} from './bootstrap';

class LeftPanel extends Component {
    render() {
        return(
            <SideBar>
                {this.props.children}
            </SideBar>
        );
    }
}

export default LeftPanel;