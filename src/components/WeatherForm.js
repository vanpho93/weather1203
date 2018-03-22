import React, { Component } from 'react';
import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

export class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
        this.getTemp = this.getTemp.bind(this);
    }

    getTemp() {
        const { txtCityName } = this.state;
        axios.get(URL + txtCityName)
        .then(x => alert(x.data.main.temp));
    }

    render() {
        return (
            <div className="form-group">
                <div className="form-group">
                    <label>City Name:</label>
                    <input
                        className="form-control"
                        value={this.state.txtCityName}
                        onChange={evt => this.setState({ txtCityName: evt.target.value })}
                    />
                </div>
                <button className="btn btn-success form-control" onClick={this.getTemp}>
                    Get Weather
                </button>
            </div>
        );
    }
}
