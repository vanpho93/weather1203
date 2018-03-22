import React, { Component } from 'react';
import { WeatherForm } from './WeatherForm';
import { WeatherMessage } from './WeatherMessage';
import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

export class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: 'Saigon',
            temp: 30,
            loading: false
        };
        this.onGetTemp = this.onGetTemp.bind(this);
    }
    componentDidMount() {
        // const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        // axios.get(url + 'SaiGon')
        // .then(x => console.log(x.data.main.temp));
    }

    onGetTemp(txtCityName) {
        axios.get(URL + txtCityName)
        .then(x => alert(x.data.main.temp));
    }

    render() {
        const { cityName, temp, loading } = this.state;
        return (
            <div className="container">
                <WeatherMessage cityName={cityName} temp={temp} loading={loading} />
                <WeatherForm onGetTemp={this.onGetTemp} />
            </div>
        );
    }
}
