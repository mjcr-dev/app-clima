const axios = require("axios");


const getLugar = async(direccion) => {

    const key = "56fda9914dd64357a6b163244212001";

    const resp = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURI(direccion)}`);

    const resp_data = resp.data.location;
    const name = resp_data.name;
    const region = resp_data.region;
    const country = resp_data.country;
    const lat = resp_data.lat;
    const lon = resp_data.lon;


    return {
        name,
        region,
        country,
        lat,
        lon
    };

}

module.exports = {
    getLugar
}