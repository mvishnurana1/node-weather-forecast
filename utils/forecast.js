let request = require('request'); 

const forecast = (latitude, longitude, callback) => {
    let url = `https://api.darksky.net/forecast/21fd483506dd6a71c4a6d783865c5da5/${latitude},${longitude}?units=si&lang=en`
    request({ url: url, json: true}, (error, response)  => {
        if (error){
            callback(`Unable to connect to the weather service!!!`, undefined); 
        } else if (response.body.error) {
            callback(`Unable to find location`, undefined); 
        } else {
            //callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
            callback(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees celsius out. ${response.body.currently.precipProbability}% chance of rain.`); 
        }
    }); 
}

module.exports = forecast; 