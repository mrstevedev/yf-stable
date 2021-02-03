import React from 'react';
import { Header } from './components/Header';
import { MainHeader } from './components/MainHeader';
import { What } from './components/What';
import { Footer } from './components/Footer';
import { How } from './components/How';
import { Why } from './components/Why';
import { Tokenomics } from './components/Tokenomics';
import { UseCases } from './components/UseCases';
import { LargeFooter } from './components/LargeFooter';

const App: React.FC = () => {
    return (
        <div className="yf__main">
            <Header />
            <MainHeader />
            <What />
            <How />
            <Why />
            <Tokenomics />
            <UseCases />
            <LargeFooter />
            <Footer />
        </div>
    );
}

export default App;