import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { onError, onGetTemp, onStartGetTemp } from '../redux/actionCreators';
import * as actionCreators from '../redux/actionCreators';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

class WeatherFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
        this.getTemp = this.getTemp.bind(this);
    }

    getTemp() {
        const { txtCityName } = this.state;
        this.props.getTemp(txtCityName);
        this.setState({ txtCityName: '' });
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

export const WeatherForm = connect(undefined, actionCreators)(WeatherFormComponent);
