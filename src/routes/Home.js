import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Mini React Apps</h1>
                <div>
                    <ul>
                        <li>
                            <Link to="/gugudan">구구단 퀴즈</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
