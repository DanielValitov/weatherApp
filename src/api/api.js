import axios from "axios";

export const callApi = {
    getWeatherData(cityName) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_APP_ID}&units=metric`)
    }
}
