const axios = require('axios');
const moment = require('moment');

module.exports = async function() {
    const { data } = await axios.get("https://graph.facebook.com/v7.0/hotclubofurbana/events?access_token=EAAItdQw4ZBKMBALjs7LNGQbfzmi20whZAa5r8VanMQAgZBUQzJGnT48UNZBL57QpTFjeWmjzm6mkQujlSJMb8o9GLPM0TDpoMSmvZCmZAUUU8gzkqRo2qNGrUyvLktqoog6GppV94F1rUxaWsmCZABdRFCUaCml2qXaaDyz6rvzOsPEgIhsLKMPb1dyZBMvC4ZAIFbq9Im465AmEmGuPaKLY1")
    const events = data.data;

    const recentEvents = events.slice(0, 3);

    return recentEvents.map(event => ({
        ...event,
        readableStartTime: moment(event.start_time).format('dddd, MMM Do hh:mm a'),
        readableEndTime: moment(event.end_time).format('hh:mm a')
    }));
};