import React from 'react';
import { Outlet } from 'react-router-dom';
import FronEndHeader from './FronEndHeader';
import FrontEndFooter from './FrontEndFooter';


const FrontEndLayout = () => {
    return (
        <>
            <FronEndHeader></FronEndHeader>
            <Outlet></Outlet>
            <FrontEndFooter></FrontEndFooter>
        </>
    );
};

export default FrontEndLayout;