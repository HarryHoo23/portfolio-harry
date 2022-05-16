require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appizJXuwrpomyW4b').table('projects');


exports.handler = async (event, context) => {
    try {
        const { records } = await airtable.list();
        const projects = records.map((project) => {
            const { id } = project;
            const { name, img, url, description, tech, date } = project.fields;
            const imgUrl = img[0].url;
            return { id, name, url, description, tech, imgUrl, date }
        })
        return {
            headers: {
            'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(projects)
          }
    } catch (error) {
        return {
            statusCode: 500, body: 'Server Error'
        }
    }
}