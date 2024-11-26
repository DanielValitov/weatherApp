import React from 'react';
import s from './CityCard.module.css';
import {Field, reduxForm} from 'redux-form';

const CityForm = ({handleSubmit, cityValue, setCityValue, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'citySearch'} component={'input'} value={cityValue} onChange={(e) => setCityValue(e.target.value)} type="text"
                   placeholder="Enter city name..."/>
            <button>Find</button>
        </form>
    )
}

const ReduxCityForm = reduxForm({form: 'city'})(CityForm)

const CityCard = (props) => {

    const [cityValue, setCityValue] = React.useState('');

    const onSubmit = () => {
        props.getWeatherData(cityValue)
    }
    debugger
    return (
        <div className={s.cardContainer}>
            <ReduxCityForm onSubmit={onSubmit} cityValue={cityValue} setCityValue={setCityValue} />
            <div>
                {props.data.icon && <><img className={s.cardWeatherIcon} src={`http://openweathermap.org/img/w/${props.data.icon}.png`} alt="Weather icon"/>
                    <h1>{props.data.cityName}</h1>
                    <h3>{props.data.maindesc}</h3>
                    <p>{props.data.secdesc}</p>
                    <div className={s.cardWeatherDescriptionBlock}>
                        <p><b>Temperature now: </b>{props.data.tempnow}</p>
                        <p><b>Minimal temperature: </b>{props.data.mintemp}</p>
                        <p><b>Maximal temperature: </b>{props.data.maxtemp}</p>
                        <p><b>Humidity: </b>{props.data.hum}</p>
                        <p><b>Pressure: </b>{props.data.pres}</p>
                    </div>
                </>}
                {props.error ? <h3>{props.error}</h3> : ""}
            </div>
        </div>
    );
};



export default CityCard;