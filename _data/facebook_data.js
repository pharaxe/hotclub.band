const axios = require('axios');
const moment = require('moment');

module.exports = async function() {
    return [];
    const accessToken = 'EAAItdQw4ZBKMBAP8zUPzXwVClwCjP1VzpReKhWMWlNdUfb9fltOmWGBLrinsT20leLAoPnRgGGx4nL1CnB52BHF6xz8KWAlc4nHos3ABBtHVMlZC5xJFFVLmZCURaZBFa4T2StjZAXg5O8KFRyqMZCNORH8B1SzzeIIZCYYkTmzE8MjppiSq6LuBhArZBTkQEU2aC2b93ZBvfOxEM5UNT6vOS'
    const { data } = await axios.get(`https://graph.facebook.com/v7.0/hotclubofurbana/events?access_token=${accessToken}`);
    const events = data.data;

    const recentEvents = events.slice(0, 3);

    return recentEvents.map(event => ({
        ...event,
        start_time: moment(event.start_time).format('dddd, MMM Do hh:mm a'),
        end_time: moment(event.end_time).format('hh:mm a')
    }));
};