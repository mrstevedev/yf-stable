import React from 'react';
import { Navbar } from './Navbar';
import { NavButton } from './NavButton';
import LogoHeader from '../../public/logo_header.png';
import { HashLink as Link } from 'react-router-hash-link';

export const Header: React.FC = () => {
    return (
        <header className="yf__top-header">
            <div className="container">
                <Link to="#home"><img src={LogoHeader} /></Link>
                <Navbar></Navbar>
                <NavButton></NavButton>
            </div>
        </header>
    )
}