import React, { Component } from 'react';
import { 
    MainContainer
} from './layout';

class RightPanel extends Component {
    render() {
        return(
            <MainContainer>
                {this.props.children}
            </MainContainer>
        );
    }
}

export default RightPanel;