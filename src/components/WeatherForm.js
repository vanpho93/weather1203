import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { onError, onGetTemp, onStartGetTemp } from '../redux/actionCreators';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

class WeatherFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
        this.getTemp = this.getTemp.bind(this);
    }

    getTemp() {
        const { txtCityName } = this.state;
        // const { dispatch } = this.props;
        // dispatch({ type: 'ON_START_GET_TEMP' });
        this.props.onStartGetTemp();
        axios.get(URL + txtCityName)
            .then(response => {
                const { temp } = response.data.main;
                // dispatch({ type: 'ON_GET_TEMP', cityName: txtCityName, temp });
                this.props.onGetTemp(txtCityName, temp);
                this.setState({ txtCityName: '' });
            })
            .catch(error => {
                alert('Cannot find city name.');
                // dispatch({ type: 'ON_ERROR' });
                this.props.onError();
                this.setState({ txtCityName: '' });
            });
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
                <button
                    className="btn btn-success form-control"
                    onClick={this.getTemp}
                >
                    Get Weather
                </button>
            </div>
        );
    }
}

export const WeatherForm = connect(undefined, { onError, onGetTemp, onStartGetTemp })(WeatherFormComponent);
