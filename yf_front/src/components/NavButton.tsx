import React from 'react';
import { Link } from 'react-router-dom';

export const NavButton: React.FC = () => {
    return (
        <div>
            <a className="yf__nav-button button" href="http://localhost:8080/">Dashboard</a>
        </div>
    );
}