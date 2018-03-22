import React, { Component } from 'react';
import axios from 'axios';

export class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
        this.getTemp = this.getTemp.bind(this);
    }

    getTemp() {
        const { txtCityName } = this.state;
        this.props.onGetTemp(txtCityName);
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
                <button className="btn btn-success form-control" onClick={this.getTemp}>
                    Get Weather
                </button>
            </div>
        );
    }
}
