import axios from 'axios';

const API_KEY = 'd875425052aa4784bd93e53022bbf81f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// api.openweathermap.org/data/2.5/forecast?appid=d875425052aa4784bd93e53022bbf81f&q=London,us
// http://api.openweathermap.org/data/2.5/forecast?appid=d875425052aa4784bd93e53022bbf81f&q=london,us
export const FETCH_WEATHER =  'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
