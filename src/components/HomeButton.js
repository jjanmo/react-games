import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../assets/home.png';

function HomeButton() {
    return (
        <div>
            <Link to="/">
                <img src={HomeImg} alt="home" />
            </Link>
        </div>
    );
}

export default HomeButton;
