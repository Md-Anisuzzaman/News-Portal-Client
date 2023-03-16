import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
    const { authenticated } = useSelector((state) => state.auth);

    useEffect(() => {
      console.log(authenticated);
    }, [])
    
    if (authenticated) {
        return children;
    }
    else {
      return <Navigate to="/login" replace={true} />
    }
};

export default PrivateRoute;
