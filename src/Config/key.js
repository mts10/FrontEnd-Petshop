import React from 'react';
import Home from '../pages/home';

const Keys = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fab9af3022mshcd4e9c52f9e1a85p195239jsne2e03521e6ff',
            'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    return (
        <Home options={options} />
    );
};

export default Keys;