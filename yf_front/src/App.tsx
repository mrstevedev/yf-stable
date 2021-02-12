import React from 'react';
import { Index } from './pages/Index';
import { HashRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="yf__main">
            <Router>
                <Route exact path="/" render={() => <Index /> } />
            </Router>
        </div>
    );
}

export default App;