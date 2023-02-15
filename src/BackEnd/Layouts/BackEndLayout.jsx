import React from 'react';
import { Outlet } from 'react-router-dom';
import BackendHeader from './BackendHeader';
import BackendSideBar from './BackendSideBar';

const BackEndLayout = () => {
    return (
        <>
            <BackendHeader />
            <BackendSideBar/>
            <main id="content" className="app-content">
                <Outlet></Outlet>
            </main>
            <a href="/#" data-toggle="scroll-to-top" className="btn-scroll-top fade">
                <i className="fa fa-arrow-up" />
            </a>
        </>

    );
};

export default BackEndLayout;