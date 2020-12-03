import React from 'react';

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
        const { number1, number2, input } = this.state;
        e.preventDefault();
        if (number1 * number2 === parseInt(input)) {
            this.setState({ message: '와우 맞추었습니다!' });
        } else {
            this.setState({ message: '꽝!! 틀렸습니다.' });
        }
    };

    handleChange = (e) => {
        const { target } = e;
        this.setState({ input: target.value });
    };

    render() {
        const { number1, number2, input, message } = this.state;
        return (
            <div>
                <h1>구구단을 맞추시오 🚀</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>{`${number1} * ${number2} = ?`}</div>
                    <div>
                        <input type="number" value={input} onChange={this.handleChange} />
                        <input type="submit" value="제출" />
                    </div>
                </form>
                <div>{message}</div>
            </div>
        );
    }
}

export default Gugudan;
