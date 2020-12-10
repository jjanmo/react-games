import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import EndWordsRelay from '../routes/EndWordsRelay';
import Gugudan from '../routes/Gugudan';
import Home from '../routes/Home';
import styles from '../styles/App.module.css';

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/gugudan" component={Gugudan} />
                <Route path="/endwords-relay" component={EndWordsRelay} />
            </Router>
        </div>
    );
}

export default App;
