const weatherIconMap: { [key: number]: string } = {
  0: "/weather-icons/wx-clear-sky.svg",
  1: "/weather-icons/wx-cloudy.svg",
  2: "/weather-icons/wx-cloudy.svg",
  3: "/weather-icons/wx-cloudy.svg",
  45: "/weather-icons/wx-fog.svg",
  48: "/weather-icons/wx-fog.svg",
  51: "/weather-icons/wx-rain.svg", // Using rain icon for drizzle
  53: "/weather-icons/wx-rain.svg",
  55: "/weather-icons/wx-rain.svg",
  56: "/weather-icons/wx-cold.svg",
  57: "/weather-icons/wx-cold.svg",
  61: "/weather-icons/wx-rain.svg",
  63: "/weather-icons/wx-rain.svg",
  65: "/weather-icons/wx-rain.svg",
  66: "/weather-icons/wx-cold.svg",
  67: "/weather-icons/wx-cold.svg",
  71: "/weather-icons/wx-snow.svg",
  73: "/weather-icons/wx-snow.svg",
  75: "/weather-icons/wx-snow.svg",
  77: "/weather-icons/wx-snow.svg",
  80: "/weather-icons/wx-rain-showers.svg",
  81: "/weather-icons/wx-rain-showers.svg",
  82: "/weather-icons/wx-rain-showers.svg",
  85: "/weather-icons/wx-snow.svg",
  86: "/weather-icons/wx-snow.svg",
  95: "/weather-icons/wx-thunderstorm.svg",
  96: "/weather-icons/wx-thunder.svg",
  99: "/weather-icons/wx-thunder.svg",
};

export const getWeatherIcon = (weatherCode: number): string => {
  return weatherIconMap[weatherCode] || "";
};
