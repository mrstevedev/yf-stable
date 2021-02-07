import React from 'react';

export const How: React.FC = () => {
    return (
        <div className="section yf__how" id="how">
            <div className="container">
                <div className="yf__how-diagonal-large blue-1"></div>
                <div className="yf__how-diagonal-large pink-1"></div>
                <div className="yf__how-diagonal-large blue-2"></div>
            <div className="yf__how-system-glass">
                <h1>The <span className="yf__how-header-colored-blue">YFStable</span> System</h1>
                <div className="yf__how-system-row left">
                    <div className="yf__how-system-number">1</div>
                    <div className="yf__how-system-row-right">
                        <h2 className="pink">Specific Asset Liquidity Protection</h2>
                        <p>Through creating a YFSTABLE-Asset pool, provide safety from market volatility. In return, the pools help build the YFStable ecosystem.</p>
                    </div>
                </div>
                <div className="yf__how-system-row right">
                    <div className="yf__how-system-row-right right">
                    <h2 className="blue">Expansion Enabled Through Market Demand</h2>
                    <p>Buys that are created through the supplied pools triggers, at a minimum, a 1% supply <br /> expansion which is divvied out instantly to holders. </p>
                    </div>
                    <div className="yf__how-system-number">2</div>
                </div>
                <div className="yf__how-system-row left">
                    <div className="yf__how-system-number">3</div>
                    <div className="yf__how-system-row-right">
                    <h2 className="pink">Contraction Created During Supply Surplus</h2>
                    <p>As demand decreases through market sells, the transaction is taxed 1% which is burnt and creates a lessened supply.</p>
                    </div>
                </div>
                <div className="yf__how-system-row right">
                    <div className="yf__how-system-row-right right">
                    <h2 className="blue">Ever-Increasing Liquidity</h2>
                    <p>In order to create the liquidity protection desired, liquidity on all levels must achieve balance to hedge market volatility. By taxing .5% on sells and token transfers to unsupported pools, the tax is converted to liquidity to a lacking pool and locked forever.</p>
                    </div>
                    <div className="yf__how-system-number">4</div>
                </div>
                <div className="yf__how-system-row left">
                    <div className="yf__how-system-number">5</div>
                    <div className="yf__how-system-row-right">
                    <h2 className="pink">Consistently Reacting to Sudden Spikes in Supply and Demand</h2>
                    <p>Through quadratic expansion and contraction functions, YFStable provides increasing incentives to either hold or sell as it becomes unstable and separates from its given balance in each epoch.</p>
                    </div>
                </div>
                <div className="yf__how-system-row right">
                    <div className="yf__how-system-row-right right">
                    <h2 className="blue">Holding Reserves to Ensure Equilibrium</h2>
                    <p>As supply inflates, 2.5% of the inflation is assigned to the a YFStable reserve. Constantly growing, the YFStable reserve is used to marke buy or sell when the sudden spikes are so great that incentivized rewards alone cannot obtain the balance.</p>
                    </div>
                    <div className="yf__how-system-number">6</div>
                </div>
                <div className="yf__how-system-bottom">
                    <a href="https://app.uniswap.org/#/swap?inputCurrency=0xc39922971c1fedb5b18dd5d15a5424264c24d38a" className="button">Get YFstable</a>
                </div>
            </div>
            </div>
        </div>
    )
}