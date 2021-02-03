import React from 'react';
import equilibrium from '../../public/graphics_equilibrium.png';
import expansion from '../../public/graphics_expansion.png';
import contraction from '../../public/graphics_contraction.png';

export const Why: React.FC = () => {
    return (
        <div className="section yf__why" id="why">
            <div className="container">
                <h1 className="">The <span className="yf__what-txt-colored-pink">YFSTABLE</span> Road To Success</h1>

                <p>Elastic supply systems work towards the goal of achieving stability. This doesn’t happen instantly, but instead takes time and goes through a continual series of expansions and contractions.  Adopters of YFStable who hold through the tokens expansions and contractions as it searches for stability will continuously gain equity due to contract functions. </p>

                <div className="yf__why-bottom">
                    <div className="yf__why-bottom-col-1">
                        <img src={equilibrium} />
                        <h2>Gaining From The Equilibrium</h2>
                        <p>- Investor 1 buys 100 YFStable from the market. Their 1% transaction tax is distributed to all holders as 1 YFStable is minted for this cause.
                        - Investor 2 sells 100 YFStable to the market. Their 1% transaction tax is burnt, decreasing the supply and increasing holder value.
                        - During these transactions, while there is no increase in price as an equal amount is bought and sold. However, supply remains the same yet all holders hold more YFStable, increasing their equity.
                        </p>
                    </div>
                    <div className="yf__why-bottom-col-2">
                        <img src={expansion} />
                        <h2>Gaining From The Expansion</h2>
                        <p>- Investor 1 buys 1000 YFStable from the market. 20% of the transaction is taxed, minting 200 YFStable and delivering to all holders.
                        - Investor 2 sells 100 YFStable to the market. 1% of their transaction, or 1 YFStable is taxed and burnt burnt, decreasing the supply and increasing holder value.
                        - During these transactions, the YFStable price has increased as well as its supply. In return, holders still hold more YFStable, increasing their equity.
                        </p>
                    </div>
                    <div className="yf__why-bottom-col-3">
                        <img src={contraction} />
                        <h2>Gaining From The Contraction</h2>
                        <p>- Investor 1 buys 1000 YFStable from the market. 20% of the transaction is taxed, minting 200 YFStable and delivering to all holders.
                        - Investor 2 sells 100 YFStable to the market. 1% of their transaction, or 1 YFStable is taxed and burnt burnt, decreasing the supply and increasing holder value.
                        - During these transactions, the YFStable price has increased as well as its supply. In return, holders still hold more YFStable, increasing their equity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}