import React from 'react';
import { Index } from './pages/Index';
import { Dashboard } from './dashboard/Dashboard';
import { HashRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="yf__main">
            <Router>
                <Route exact path="/" render={() => <Index /> } />
                <Route exact path="/dashboard" render={() => <Dashboard />} />
            </Router>
        </div>
    );
}

export default App;