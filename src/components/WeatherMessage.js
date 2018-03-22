import React from 'react';
import { connect } from 'react-redux';

function getMessage(temp, cityName, loading) {
    if (loading) return <h3>Loading...</h3>;
    if (!cityName) return <h3>Enter your city name.</h3>
    return <h3>{cityName} is now {temp}<sup>o</sup>C</h3>
}

const WeatherMessageComponent = ({ temp, cityName, loading }) => (
    <div className="form-group">
        { getMessage(temp, cityName, loading) }
    </div>
);

const mapState = state => ({
    temp: state.temp,
    cityName: state.cityName,
    loading: state.loading
});

export const WeatherMessage = connect(mapState)(WeatherMessageComponent);
