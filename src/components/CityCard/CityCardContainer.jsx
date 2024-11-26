import {Component} from "react";
import CityCard from "./CityCard.jsx";
import {connect} from "react-redux";
import {getWeatherData, setIsFetching} from "../../store/weather-data-reducer.js";

class CityCardContainer extends Component {
    render() {
        return <CityCard {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.weatherData.data,
        isFetching: state.weatherData.isFetching,
        error: state.weatherData.error
    }
}

export default connect(mapStateToProps, {setIsFetching, getWeatherData})(CityCardContainer);