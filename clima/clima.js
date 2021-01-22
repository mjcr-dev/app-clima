const axios = require("axios");

const getClima = async(lat, lon) => {

    const appid = "cf215242e81300f28a7d31115c7ab54e";
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`);

    return resp.data;

}

module.exports = {
    getClima
}