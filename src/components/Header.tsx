import React from 'react';
import { Navbar } from './Navbar';
import { NavButton } from './NavButton';
import LogoHeader from '../../public/logo_header.png';

export const Header: React.FC = () => {
    return (
        <header className="yf__top-header">
            <div className="container">
                <a href="#home"><img src={LogoHeader} /></a>
                <Navbar></Navbar>
                {/* <NavButton></NavButton> */}
            </div>
        </header>
    )
}