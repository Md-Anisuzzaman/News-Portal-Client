import React from 'react';
import { Outlet } from 'react-router-dom';
import FronEndHeader from './FronEndHeader';
import FrontEndFooter from './FrontEndFooter';
import FrontEndNavbar from './FrontEndNavbar';


const FrontEndLayout = () => {
    return (
        <>
            <FronEndHeader></FronEndHeader>
            <FrontEndNavbar></FrontEndNavbar>
            <Outlet></Outlet>
            <FrontEndFooter></FrontEndFooter>
        </>
    );
};

export default FrontEndLayout;