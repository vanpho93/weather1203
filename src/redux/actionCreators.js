export function onError() {
    return { type: 'ON_ERROR' };
}

export function onStartGetTemp() {
    return { type: 'ON_START_GET_TEMP' };
}

export function onGetTemp(cityName, temp) {
    return { type: 'ON_GET_TEMP', cityName, temp }
}
