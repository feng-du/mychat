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
                <Card>
                    <CardItem>
                        <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
                    </CardItem>
                    <CardItem>
                        <a className="nav-link" href="#">Reports</a>
                    </CardItem>
                    <CardItem>
                        <a className="nav-link" href="#">Analytics</a>
                    </CardItem>
                    <CardItem>
                        <a className="nav-link" href="#">Export</a>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem>
                        <a className="nav-link" href="#">Nav item</a>
                    </CardItem>
                    <CardItem>
                        <a className="nav-link" href="#">Nav item again</a>
                    </CardItem>
                    <CardItem>
                        <a className="nav-link" href="#">One more nav</a>
                    </CardItem>
                    <CardItem>
                        <a className="nav-link" href="#">Another nav item</a>
                    </CardItem>
                </Card>
            </SideBar>
        );
    }
}

export default LeftPanel;