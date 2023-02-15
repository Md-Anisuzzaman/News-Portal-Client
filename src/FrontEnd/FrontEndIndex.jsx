import React from 'react';
import { Link } from 'react-router-dom';

const FrontEndIndex = () => {
    return (
        <div>
            <h1>Hello From home </h1>
            <Link to="/dashboard" className='btn btn-success'>Dashboard</Link>
        </div>
    );
};

export default FrontEndIndex;