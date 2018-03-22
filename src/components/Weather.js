import React, { Component } from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherMessage } from './WeatherMessage';
import axios from 'axios';
import { connect } from 'react-redux';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

class WeatherComponent extends Component {
    constructor(props) {
        super(props);
        this.onGetTemp = this.onGetTemp.bind(this);
    }

    componentDidMount() {
        // const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        // axios.get(url + 'SaiGon')
        // .then(x => console.log(x.data.main.temp));
    }

    onGetTemp(txtCityName) {
        const { dispatch } = this.props;
        dispatch({ type: 'ON_START_GET_TEMP' });
        axios.get(URL + txtCityName)
        .then(response => {
            const { temp } = response.data.main;
            dispatch({ type: 'ON_GET_TEMP', cityName: txtCityName, temp });
        })
        .catch(error => {
            alert('Cannot find city name.');
            dispatch({ type: 'ON_ERROR' });
        });
    }

    render() {
        return (
            <div className="container">
                <WeatherMessage />
                <WeatherForm onGetTemp={this.onGetTemp} />
            </div>
        );
    }
}

export const Weather = connect()(WeatherComponent);
