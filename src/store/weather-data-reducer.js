import axios from "axios";
import {callApi} from "../api/api.js";

const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_ERROR = 'SET_ERROR';

export const setWeatherData = (cityName, icon, maindesc, secdesc, tempnow, mintemp, maxtemp, hum, pres) => ({
    type: SET_WEATHER_DATA,
    data: {cityName, icon, maindesc, secdesc, tempnow, mintemp, maxtemp, hum, pres}
});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setError = (error) => ({type: SET_ERROR, error});

const initialState = {
    data: {
        cityName: null,
        icon: null,
        maindesc: null,
        secdesc: null,
        tempnow: null,
        mintemp: null,
        maxtemp: null,
        hum: null,
        pres: null
    },
    error: null,
    isFetching: false,
};

const weatherDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA: {
            return {
                ...state, data: action.data,
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state, isLoading: action.isFetching,
            }
        }
        case SET_ERROR: {
            debugger
            return {
                ...state, error: action.error,
            }
        }
        default: {
            return state;
        }
    }
}

export const getWeatherData = (cityName) => async (dispatch) => {
    dispatch(setIsFetching(true))
    callApi.getWeatherData(cityName)
        .then(data => {
            dispatch(setWeatherData(data.data.name, data.data.weather[0].icon, data.data.weather[0].main, data.data.weather[0].description, data.data.main.temp, data.data.main.temp_min, data.data.main.temp_max, data.data.main.humidity, data.data.main.pressure));
            dispatch(setError(null));
            dispatch(setIsFetching(false))
            return;
        })
        .catch(error => {
            dispatch(setError(error.message));
            dispatch(setWeatherData(null));
            dispatch(setIsFetching(false))
        })
}


export default weatherDataReducer;