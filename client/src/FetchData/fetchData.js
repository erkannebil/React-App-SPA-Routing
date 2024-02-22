const trend_type = Object.freeze({
    Movies: "movie",
    Person: "person",
    TV: "tv",
});

const time_window = Object.freeze({
    day: "day",
    week: "week",
});

const getTrendRequest = async function (trend_type, time_window, token) {
    const url = `https://api.themoviedb.org/3/trending/${trend_type}/${time_window}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWMyNjczYmE3MTQ0NDNlNzQxNzhmODdiYTE3ZDg4ZCIsInN1YiI6IjYzYThjMzc3MGYyMWM2MDA3ODcxNTJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvF5XrBT7B0AJwPJekwVF7QoSkUBWfsuy9dTE90m9v8`,
        },
    };

    try {
        let response = await fetch(url, options);
        let data = await response.json(); 
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data ", error);
    }
};

export default { getTrendRequest, trend_type, time_window };
