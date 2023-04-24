import React, { Component, useState } from "react";

const API_KEY = 'e579f4c7e80d1fddf894bba541c06569';

function Home(props:any) {
    const [temp, setTemp] = useState(0);
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    
    const getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            setTemp(Math.floor(json.main.temp - 273.15));
            setName(json.weather[0].main);
            setIcon(json.weather[0].icon);
        });
    };

    console.log(icon);
    const img_url = `http://openweathermap.org/img/w/${icon}.png`;
    
    
        getWeather()
    

    
    return(
        <>
            <h1>오늘의 날씨</h1>
            <img alt="weatherIcon" src={img_url}/>
            <h3>온도 : {temp}ºC</h3>
            <h3>날씨 : {name}</h3>
            
        </>
    )
}

export default Home;