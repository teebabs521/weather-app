import React from 'react';
import './style.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
    <div className="main">
        <Card.Content>
            <p className="header">{weatherData.name}</p>
            <div className="flex">
            <p className="day">Day: {moment().format('dddd')}</p>
            <p className="day">Description: {weatherData.weather[0].description}</p>
            </div>

            <div className="flex">
            <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className="flex">
            <p className="sunrise-sunset">Sunrise: {weatherData.sys.sunrise}</p>
            <p  className="sunrise-sunset">Sunset: {weatherData.sys.sunset}</p>
            </div>

            <div className="flex">
            <p className="sunrise-sunset">Date: {moment().format('LL')}</p>
            <p className="sunrise-sunset">Wind Speed: {weatherData.wind.speed}</p>

            </div>
            
        </Card.Content>
    </div>
);

export default WeatherCard;