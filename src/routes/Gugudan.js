import React from 'react';
import HomeButton from '../components/HomeButton';
import RestartImg from '../assets/restart.png';
import styles from '../styles/Gugudan.module.css';

class Gugudan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            message: '',
            input: '',
        };
    }

    componentDidMount() {
        this.setNumber();
    }

    setNumber() {
        this.setState({
            number1: Math.floor(Math.random() * 9 + 1),
            number2: Math.floor(Math.random() * 9 + 1),
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { number1, number2, input } = this.state;
        const submittedNumber = parseInt(input);
        if (isNaN(submittedNumber)) {
            this.setState({ message: '숫자만 입력할 수 있습니다. 😱', input: '' });
        } else if (number1 * number2 === parseInt(input)) {
            this.setNumber();
            this.setState(() => {
                return {
                    message: `와우 🥳 맞췄습니다! (정답 : ${number1 * number2})`,
                    input: '',
                };
            });
        } else {
            this.setState({ message: `꽝 🤯 틀렸습니다.`, input: '' });
        }
    };

    handleChange = (e) => {
        const { target } = e;
        this.setState({ input: target.value });
    };

    handleClick = () => {
        this.setNumber();
    };

    render() {
        const { number1, number2, input, message } = this.state;
        return (
            <div className={styles.outerContainer}>
                <h1 className={styles.title}>구구단을 외우자</h1>
                <div className={styles.innerContainer}>
                    <button className={styles.restartButton} onClick={this.handleClick}>
                        <img className={styles.img} src={RestartImg} alt="restart" />
                    </button>
                    <div className={styles.question}>{`${number1} X ${number2} = ?`}</div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <input
                            className={styles.input}
                            type="text"
                            value={input}
                            onChange={this.handleChange}
                            autoFocus
                            maxLength={3}
                        />
                        <input className={styles.submitButton} type="submit" value="제출" />
                    </form>
                    <div className={styles.message}>{message}</div>
                </div>
                <HomeButton />
            </div>
        );
    }
}

export default Gugudan;
