import React, { useEffect, useState } from "react";
import axios from "axios";
import { getWeatherIcon } from "./weatherIconMap";

interface WeatherData {
  temp: number;
  weatherCode: number;
}

export const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=44.2447&longitude=17.9781&current_weather=true";

  useEffect(() => {
    console.log("Fetching weather data...");
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Response data:", response.data);
        const data = response.data.current_weather;
        setWeather({
          temp: data.temperature,
          weatherCode: data.weathercode,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>...</div>;
  }

  if (error) {
    return <div>?</div>;
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <p className="mr-2 text-l">{weather?.temp}°C</p>
      {weather && (
        <img
          src={getWeatherIcon(weather.weatherCode)}
          alt="Weather Icon"
          className="w-6 h-6"
        />
      )}
    </div>
  );
};

export default Weather;
