import React, { useState, useEffect } from 'react';
import Weather from './components/Weather'; // Assuming Weather component is imported

export default function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };

    fetchData();
  }, []); // Empty dependency array to mimic componentDidMount behavior

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (lat !== null && long !== null) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
          );
          const result = await response.json();
          setData(result);
          console.log(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchWeatherData();
  }, [lat, long]);

  console.log("Latitude is:", lat);
  console.log("Longitude is:", long);

  return (
    <div className="App">
      {data ? <Weather weatherData={data} /> : <div></div>}
    </div>
  );
}
