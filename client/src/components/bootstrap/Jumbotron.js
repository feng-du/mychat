import React from 'react';

const Jumbotron = (props) => {
    const { title, item, children } = props;

    return(
        <div className="jumbotron jumbotron-fluid jumbotron-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="display-4">{title}</h1>
                        <p className="lead">{children}</p>
                    </div>

                    <div className="col-md-4 offset-md-1">
                        {item}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Jumbotron };