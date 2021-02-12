import React from 'react';
import Logo from '../../public/logo_header.jpg';

export const MainHeader: React.FC = () => {
    return (
        <div className="yf__intro" id="home">
            <div className="container">
                <img src={Logo} width="230" height="230" style={{ mixBlendMode: 'lighten' }} />
                <h1 className="yf__what-heading">A stable coin with the flexibility <br /> 
                to adjust to the market</h1>
                <p>
                    Supply and demand has always been what determines the value of a given asset in a free market. By adjusting to the market and not an artificial component like fiat, YFStable solves problems that fiat consistently encounters. YFStable is a change in the system.
                </p>
                {/* <a target="_blank" href="https://xstable.finance/downloads/xstable_litepaper.pdf" className="yf__what-glass-btn">Litepaper</a> */}
                {/* <span className="yf__what-line-sm-blue"></span> */}
            </div>
        </div>
    )
}