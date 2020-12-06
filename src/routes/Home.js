import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Mini React Apps</h1>
                {/* <div> */}
                <ul className={styles.listContainer}>
                    <li>
                        <Link to="/gugudan">구구단 퀴즈</Link>
                    </li>
                    <li>
                        <Link to="/endword">끝말잇기 게임</Link>
                    </li>
                    <li>
                        <Link to="/number-baseball">숫자야구 게임</Link>
                    </li>
                    <li>
                        <Link to="/scissor-rock-paper">가위바위보 게임</Link>
                    </li>
                </ul>
                {/* </div> */}
            </div>
        );
    }
}

export default Home;
