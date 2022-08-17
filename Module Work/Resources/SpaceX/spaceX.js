const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData));
// retrieve the details only from the Vandenberg Air Force Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].full_name));
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
    