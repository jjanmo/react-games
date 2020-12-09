import React, { useState, useEffect, useRef } from 'react';
import HomeButton from '../components/HomeButton';
import RestartImg from '../assets/restart.png';
import styles from '../styles/Gugudan.module.css';

function Gugudan() {
    const [firstNumber, setFirstNumber] = useState(1);
    const [secondNumber, setSecondNumber] = useState(1);
    const [message, setMessage] = useState('');
    const [input, setInput] = useState('');
    const numberInput = useRef();

    useEffect(() => {
        setNewNumber();
        numberInput.current.focus();
    }, []);

    const setNewNumber = () => {
        setFirstNumber(Math.floor(Math.random() * 9 + 1));
        setSecondNumber(Math.floor(Math.random() * 9 + 1));
    };

    const initializeInput = () => {
        setInput('');
        numberInput.current.focus();
    };

    const handleClick = () => {
        setNewNumber();
        numberInput.current.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswer = firstNumber * secondNumber;
        const answer = parseInt(input, 10);
        if (isNaN(answer)) {
            setMessage('숫자만 입력할 수 있습니다. 😱');
            initializeInput();
        } else if (correctAnswer === parseInt(input, 10)) {
            setNewNumber();
            setMessage(`와우 🥳 맞췄습니다! (정답 : ${correctAnswer})`);
            initializeInput();
        } else {
            setMessage('꽝 🤯 틀렸습니다.');
            initializeInput();
        }
    };

    const handleChange = (e) => {
        const _input = e.target.value;
        setInput(_input);
    };

    return (
        <div className={styles.outerContainer}>
            <h1 className={styles.title}>구구단을 외우자</h1>
            <div className={styles.innerContainer}>
                <button className={styles.restartButton} onClick={handleClick}>
                    <img className={styles.img} src={RestartImg} alt="restart" />
                </button>
                <div className={styles.question}>{`${firstNumber} X ${secondNumber} = ?`}</div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        value={input}
                        onChange={handleChange}
                        maxLength={3}
                        ref={numberInput}
                    />
                    <input className={styles.submitButton} type="submit" value="제출" />
                </form>
                <div className={styles.message}>{message}</div>
            </div>
            <HomeButton />
        </div>
    );
}

export default Gugudan;
