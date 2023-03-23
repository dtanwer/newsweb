import React from 'react';
const NotFound = ({msg}) => {
    return (
        <div className="container text-center m-20 my-30">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                          {msg}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;
