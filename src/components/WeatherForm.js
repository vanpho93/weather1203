import React, { Component } from 'react';

export class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityName: '' };
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
                <button className="btn btn-success form-control">
                    Get Weather
                </button>
            </div>
        );
    }
}
