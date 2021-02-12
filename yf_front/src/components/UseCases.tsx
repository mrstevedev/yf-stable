import React from 'react';
import value from '../../public/graphics_value.png';
import hedge from '../../public/graphics_hedge.png';
import safety from '../../public/graphics_safety.png';

export const UseCases: React.FC = () => {
    return (
        <div className="section yf__usecases" id="cases">
            <div className="container">
                <h1>Use Cases</h1>
                <p>Where rebase and seignorage tokens have failed with their fluctuating balances that consistently decrease holder equity, YFStable functions to maintain balance while always increasing holder equity as the token finds its stability in the long-term. By doing this, the need for YFStable in the defi space becomes apparent, serving as both collateral as well as a lendable asset.</p>
                <div className="yf__usecases-bottom">
                    <div className="yf__usecases-bottom-col">
                        <img src={value} width="79" height="72" />
                        <h2>Store of Value</h2>
                        <p>By consistently increasing holders equity, YFStable creates a system of increased value storage, even through moments of contraction.</p>
                    </div>
                    <div className="yf__usecases-bottom-col">
                        <img src={hedge} width="70" height="72" />
                        <h2>Hedging Against Market Movements</h2>
                        <p>Through YFStables algorithm which provides a stable market, it offers a hedge against extreme market movements for a large number of assets.</p>
                    </div>
                    <div className="yf__usecases-bottom-col">
                        <img src={safety} width="57" height="72" />
                        <h2>A Decentralized Safety Net</h2>
                        <p>Through its system which works to ensure its value doesn’t spike and crash in cycles, its stability becomes a safe haven for users in the defi space.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}