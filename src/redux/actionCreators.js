import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

export function getTemp(cityName) {
    return function(dispatch) {
        dispatch({ type: 'ON_START_GET_TEMP' });
        axios.get(URL + cityName)
            .then(response => {
                const { temp } = response.data.main;
                dispatch({ type: 'ON_GET_TEMP', cityName, temp });
            })
            .catch(error => {
                alert('Cannot find city name.');
                dispatch({ type: 'ON_ERROR' });
            });
    }
}
