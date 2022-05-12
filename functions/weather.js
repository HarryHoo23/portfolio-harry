require('dotenv').config();
const axios = require('axios');

const url = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric&q=sydney`;

exports.handler = async (event, context) => {
    try {
        const resp = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(resp.data),
        }
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify(error),
          }
    }
}