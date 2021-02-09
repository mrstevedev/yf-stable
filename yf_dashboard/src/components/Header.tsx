import React from 'react';
import LogoHeader from '../../public/logo_header.png';

export const Header: React.FC = () => {
    return (
        <header className="yf__top-header dashboard">
            <div className="container">
                <a href="http://localhost:8081/#">
                    <img src={LogoHeader} />
                </a>
            </div>
        </header>
    )
}