import React, { Component } from 'react';

const RightPanel = props => {
    const { title, children } = props;

    return(
        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            <h1>{title}</h1>

            {children}
        </main>
    );
}

export default RightPanel;