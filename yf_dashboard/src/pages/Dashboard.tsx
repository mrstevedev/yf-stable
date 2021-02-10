import React, { Fragment, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Dashboard: React.FC = () => {

    interface Xst {
        mintRate: string,
        burnRate: string,
        poolBalance: string,
        ethBalance: string,
        startPoolBalance: string,
        startEthBalance: string,
        currentRatio: string,
        startingRatio: string,
        lpBalance: string,
        lpLocked: string,
        lockedRatio: string,
        epochStart: string,
        currentPot: string
    }
    
    const [eth, setEthData] = useState<Xst>();

    useEffect(() => {
        fetch('https://api.xstable.finance/dashboardData')
            .then(res => res.json())
            .then(data => setEthData(data.data));
    },[])

    return (
        <Fragment>
            <div className="yf__dashboard">
            <Header></Header>
                <div className="yf__intro dashboard">
                    <div className="yf__how-diagonal-large blue-1"></div>
                    <div className="yf__how-diagonal-large pink-1"></div>
                    <div className="yf__how-system-glass">
                        <h1 className="yf__dashboard-header">Eth - YFST Pool</h1>
                        <div className="yf__presale-form">
                            <div className="row">
                                <div className="col">
                                    <div className="box">
                                        <div>Mint Rate</div>
                                        <div>{ eth?.mintRate ? Number(eth?.mintRate) + '%' : '-'}</div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="box">
                                        <div>Burn Rate</div>
                                        <div>{ eth?.burnRate ? Number(eth?.burnRate) + '%' : '-'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    Pool Reserves
                                </div>
                                <div className="col">{eth?.poolBalance ? Number(eth?.poolBalance).toFixed(2) : '-'} YFST / { eth?.ethBalance ? Number(eth?.ethBalance).toFixed(2) : '-' } ETH</div>
                            </div>
                            <div className="row">
                                <div className="col">Pool Reserves At epoch beginning</div>
                                <div className="col">{eth?.startPoolBalance ? Number(eth?.startPoolBalance).toFixed(2) : '-'} YFST / { eth?.startEthBalance ? Number(eth?.startEthBalance).toFixed(2) : '-' } ETH</div>
                            </div>
                            <div className="row">
                                <div className="col">Pool Ratios</div>
                                <div className="col">{eth?.currentRatio ? Number(eth?.currentRatio).toFixed(2) : '-'} : { eth?.startingRatio ? Number(eth?.startingRatio).toFixed(2) : '-'}</div>
                            </div>
                            <div className="row">
                            <div className="col">Total LP Tokens</div>
                                <div className="col">{eth?.lpBalance ? Number(eth.lpBalance).toFixed(4) : '-'}</div>
                            </div>
                            <div className="row">
                                <div className="col">Liquidity locked in contract</div>
                                <div className="col">{eth?.lpLocked ? Number(eth.lpLocked).toFixed(4) : '-'}</div>
                            </div>
                            <div className="row">
                                <div className="col">Locked Liquidity</div>
                                <div className="col">{eth?.lockedRatio ? Number(eth.lockedRatio).toFixed(2) + '%' : '-'}</div>
                            </div>
                            <div className="row">
                                <div className="col">Epoch started at</div>
                                <div className="col">{eth?.epochStart}</div>
                            </div>
                            <div className="row">
                                <div className="col">Current Pot size</div>
                                <div className="col">{eth?.currentPot ? Number(eth.currentPot).toFixed(2) : '-'}</div>
                            </div>
                            <div className="row">
                                <div className="col">Current Buyer Incentive</div>
                                <div className="col">{eth?.burnRate ? (Number(eth?.burnRate)-Number(eth?.mintRate)) / 2 + '%' :  '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
        </div>
        </Fragment>
    )
}