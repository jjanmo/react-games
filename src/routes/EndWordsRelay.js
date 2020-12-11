import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dff9fb;
    color: #30336b;
    border-radius: 20px;
    padding: 1rem 2rem;
`;

const Title = styled.h1`
    margin: 1rem 0;
`;

const OptionContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #7ed6df;
    border-radius: 30px;
`;

const Option = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const InputContainer = styled.div`
    margin: 2rem auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StartButton = styled.button`
    all: unset;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #273c75;
    color: #fff;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0.3rem;
    cursor: pointer;
`;

const Input = styled.input`
    outline: none;
    border: 1px solid #30336b;
    border-radius: 10px;
    background-color: #eee;
    /* font-size: 1.5rem; */
    text-align: center;
    padding: 0.5rem 0;
    width: 35%;
    position: relative;
`;

const ListContainer = styled.div`
    width: 50%;
    background-color: #eee;
    border-radius: 10px;
`;

class EndWordsRelay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Title>끝말 잇기</Title>
                <OptionContainer>
                    <Option>
                        <input type="checkbox" />
                        <label>두음법칙 적용</label>
                    </Option>
                    <Option>
                        <input type="checkbox" />
                        <label>중복단어 금지</label>
                    </Option>
                </OptionContainer>
                <InputContainer>
                    <Input type="text" />
                    <StartButton>start</StartButton>
                    <Input type="text" />
                </InputContainer>
                <ListContainer>
                    <ul>리스트</ul>
                </ListContainer>
            </Container>
        );
    }
}

export default EndWordsRelay;
