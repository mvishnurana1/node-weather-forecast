const request = require('request'); 

const geocode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYnVsbGV0LXRyYWluMSIsImEiOiJjazB1bWN4aXowbXFkM2ZycmxiazM4bzU2In0.S6JR4bNe6XoE20tIV_OoEA&limit=1`; 

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to location services!', undefined); 
        } else if (response.body.features.length === 0) {
            callback('cannot find the location...', undefined); 
        } else {
            callback({
                latitude  : response.body.features[0].center[1],  
                longitude : response.body.features[0].center[0], 
                location  : response.body.features[0].place_name
            });
        } 
    }); 
}

module.exports = geocode; 