import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Gugudan from '../routes/Gugudan';
import Home from '../routes/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/gugudan" component={Gugudan} />
            </Router>
        </div>
    );
}

export default App;
