import React from 'react';
import tokenomiks from '../../public/graphic_tokenomics.png';

export const Tokenomics: React.FC = () => {
    return (
        <div className="section yf__tokenomics" id="tokenomics">
           <div className="container">
           <h1 className="">Tokenomics</h1>

            <div className="yf__tokenomics-2col">
                <div className="yf__tokenomics-col-left">
                <img src={tokenomiks} width="349" height="272" />

                </div>
                <div className="yf__tokenomics-col-right">
                    <ul>
                        <li><span className="yf__tokenomics-col-right-list-perc">66% -</span> Liquidity Pool</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">11% -</span> Ecosystem</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">11% -</span> Marketing</li>
                        <li><span className="yf__tokenomics-col-right-list-perc">11% -</span> Community Rewards</li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
}