import React from 'react';

const MainContainer = (props) => {
    return (
        <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            {props.children}
        </main>
    );
}

export { MainContainer };
