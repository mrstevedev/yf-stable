import React from 'react';
import LogoFooter from '../../public/logo_footer.png';

export const LargeFooter: React.FC = () => {
    return (
        <div className="yf__footer-large">
            <div className="container">
                <div className="yf__footer-large-list">
                <div>
                <h3>yfstable</h3>
                <ul>
                    <li><a className="link" href="#home">Home</a></li>
                    <li><a className="link" href="#what">What is YFStable?</a></li>
                    <li><a className="link" href="#how">How it works?</a></li>
                    <li><a className="link" href="#why">Why it works?</a></li>
                </ul>
                </div>
                <div>
                <h3>Information</h3>
                <ul>
                    <li><a className="link" href="#tokenomics">Tokenomics</a></li>
                    <li><a className="link" href="#cases">Use Cases</a></li>
                </ul>
                </div>
                </div>                
                <img src={ LogoFooter } alt="logo footer" className="logo-footer" />
            </div>
        </div>
    )
}