import React from 'react';
import { Link } from 'react-router-dom';

export const NavButton: React.FC = () => {
    return (
        <div>
            <Link className="yf__nav-button button" to={{
                pathname: '/dashboard'
            }}>Dashboard</Link>
        </div>
    );
}