import React from 'react';
import Chart from '../../public/graphics_chart.png';

export const Tokenomics: React.FC = () => {
    return (
        <div className="section yf__tokenomics" id="tokenomics">
           <div className="container">
           <h1 className="">Tokenomics</h1>

            <div className="yf__tokenomics-2col">
                <div className="yf__tokenomics-col-left">
                    <img src={Chart} />
                </div>
                <div className="yf__tokenomics-col-right">
                    <ul>
                        <li><span className="yf__tokenomics-col-right-list-perc">30% -</span> Liquidity Pool</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">20% -</span> Ecosystem</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">10% -</span> Team</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">10% -</span> Presale</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">10% -</span> Marketing</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">10% -</span> Community Rewards</li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
}