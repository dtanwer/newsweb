import React from 'react';
const NotFound = ({msg}) => {
    return (
        <div class="container text-center m-20 my-30">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div class="error-details">
                          {msg}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;
