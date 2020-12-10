import React from 'react';

class EndWordsRelay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>끝말 잇기</h1>
                <div>
                    <input type="checkbox" />
                    <label>두음법칙 적용</label>
                    <input type="checkbox" />
                    <label>중복단어 금지</label>
                </div>
                <div>
                    <input type="text" readOnly />
                    <button>시작</button>
                    <input type="text" />
                </div>
                <div>
                    <div>리스트</div>
                </div>
            </div>
        );
    }
}

export default EndWordsRelay;
