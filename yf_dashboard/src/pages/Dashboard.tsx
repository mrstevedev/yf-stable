import React, { Fragment, useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Web3 from 'web3';

export const Dashboard: React.FC = () => {

    interface Xst {
        mintRate?: string,
        burnRate?: string,
        epoch?: string,
        poolBalance?: string,
        ethBalance?: string,
        startPoolBalance?: string,
        startEthBalance?: string,
        currentRatio?: string,
        startingRatio?: string,
        lpBalance?: string,
        lpLocked?: string,
        lockedRatio?: string,
        epochStart?: string,
        currentPot?: string
    }
    
    const [eth, setEthData] = useState<Xst>();
    // const [state, setState] = useState<Xst>({
    //     mintRate: '',
    //     burnRate: '',
    //     epoch: '',
    //     poolBalance: '',
    //     ethBalance: '',
    //     lpBalance: '',
    //     lpLocked: '',
    //     lockedRatio: '',
    //     startPoolBalance: '',
    //     startEthBalance: '',
    //     currentRatio: '',
    //     startingRatio: '',
    //     epochStart: '',
    //     currentPot: ''
    // })

    const [circulatingSupply, setCirculatingSupply] = useState({ circulatingSupply: '' });
    const [balance, setBalance] = useState({ balance: '' });
    const [ethBalance, setEthBalance] = useState({ ethBalance: '' });
    const [mintRate, setMintRate] = useState({ mintRate: '' });
    const [burnRate, setBurnRate] = useState({ burnRate: '' });
    const [epoch, setEpoch] = useState({ epoch: '' });


    async function loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8546')
        // const network = await web3.eth.net.getNetworkType()
        const abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"pairToken","type":"address"}],"name":"addNewSupportedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pairToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"createTokenPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"getAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"getBurnRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getLargeBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLargeTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLiquidityReserve","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box","type":"uint256"}],"name":"getLockBoxes","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getLockedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"getMintRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"getPoolCounters","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPresaleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStabilizer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getSupportedPools","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalLockedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUniswapFactory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUniswapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"pairToken","type":"address"}],"name":"getUpdatedPoolCounters","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"hasLockedBalance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPresaleDone","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"isSupportedPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isTaxLess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isTaxlessSetter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"unlockTime","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintLockedTranche","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintUnlockedTranche","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"flag","type":"bool"}],"name":"pauseContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tranche","type":"uint256"},{"internalType":"address","name":"beneficiary","type":"address"}],"name":"reassignTranche","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"removeOldSupportedPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"cont","type":"address"}],"name":"removeTaxlessSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"reserve","type":"address"}],"name":"setLiquidityReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"presaleAdd","type":"address"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPresaleDone","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"reserve","type":"address"}],"name":"setStabilizer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"flag","type":"bool"}],"name":"setTaxless","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"cont","type":"address"}],"name":"setTaxlessSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"silentSyncPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tranche","type":"uint256"}],"name":"unlockTranche","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unlockedBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        const address = '0xC39922971c1fEDb5b18dd5D15a5424264c24d38a'
        const contract = new web3.eth.Contract(abi, address)
        console.log(contract)

        contract.methods.name().call((err, result) => console.log('name', result))
        contract.methods.getTotalSupply().call((err, result) => console.log('getTotalSupply', Number(result)))
        // contract.methods.getMintRate(address).call((err, result) => console.log(result))
        // contract.methods.getBurnRate(address).call((err, result) => console.log(result))
        // contract.methods.getLiquidityReserve().call((err, result) => console.log('getLiquidityReserve', result))

        contract.methods.getCurrentEpoch().call((err, result) => {
            setEpoch({ epoch: result })
            console.log('getCurrentEpoch', Number(result))
        })

        // circulatingSupply - circulatingSupply
        contract.methods.circulatingSupply().call((err, result) => {
            setCirculatingSupply({ circulatingSupply: result })
            console.log('circulatingSupply', Number(result))
        })

        // getMintRate - mintRate
        // getBurnRate - burnRate

        // balanceOf ?? - poolBalance
        contract.methods.balanceOf(address).call((err, result) => {
            setBalance({ balance: result })
            console.log('balanceOf', Number(result))
        })
        // getBalance?? - ethBalance
        web3.eth.getBalance(address, (err, result) => {
            const ethResult = web3.utils.fromWei(result, "ether")
            console.log('ethResult', Number(ethResult))
            setEthBalance({ ethBalance: ethResult })
        })
        
        // ?? - lpBalance
        // ?? - lpLocked
        // ?? - lockedRatio
        // ?? - startPoolBalance
        // ?? - startEthBalance
        // ?? - currentRatio
        // ?? - startingRatio
        // ?? - epochStart
        // ?? - currentPot

    }

    useEffect(() => {
    
        loadBlockchainData();
        
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
                                <div className="col">{balance.balance ? Number(balance.balance).toFixed(2) : '-'} YFST / { ethBalance.ethBalance ? Number(ethBalance.ethBalance).toFixed(2) : '-' } ETH</div>

                                {/* <div className="col">{eth?.poolBalance ? Number(eth?.poolBalance).toFixed(2) : '-'} YFST / { eth?.ethBalance ? Number(eth?.ethBalance).toFixed(2) : '-' } ETH</div> */}
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