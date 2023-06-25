import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            
            this is Main
            <Navbar></Navbar>
           <Outlet/>
           <Footer></Footer>
            
        </div>
    );
};

export default Main;