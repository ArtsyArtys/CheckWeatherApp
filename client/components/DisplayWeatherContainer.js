import React from 'react'

const DisplayWeatherContainer = props => {


  // TODO: Display location above weather container
  return (
    <div className="display-weather-container">
      {props.locationWeather && props.locationWeather.map((day, idx) => {
        const currentDate = day.Date.slice(0, 10)
        const regDate = // TODO: add variable strings for day/month (i.e. Friday, May 31, 2020)
          currentDate.slice(5, 7) + "/" + // month
          currentDate.slice(8, 10) + "/" + // day
          currentDate.slice(0, 4) // year
        const {Temperature, Day, Night} = day
        let dayPrecipitation = ""
        let nightPrecipitation = ""
        if (Day.PrecipitationType && Day.PrecipitationIntensity) {
          dayPrecipitation = Day.PrecipitiationType + " " + Day.PrecipitationIntensity
        }
        if (Night.PrecipitationType && Night.PrecipitationIntensity) {
          nightPrecipitation = Night.PrecipitiationType + " " + Night.PrecipitationIntensity
        }

        return (
          <div key={idx} className="single-day-temp" style={dayStyle}>
            <h3>{regDate}</h3>
            <h4>Minimum temperature: {Temperature.Minimum.Value} F°</h4>
            <h4>Maximum temperature: {Temperature.Maximum.Value} F°</h4>
            <h4>Day:</h4>
            <h5>{Day.IconPhrase}</h5>
            <h5>{dayPrecipitation}</h5>
            <h4>Night:</h4>
            <h5>{Night.IconPhrase}</h5>
            <h5>{nightPrecipitation}</h5>
          </div>
        )
      })}
    </div>
  )
}

const dayStyle = {
  border: "1px solid black",
  display: "flex",
  justifyContent: "space-around"
}


// Example response at day[0] (locationWeather[0])

// {
//     "Date": "2020-01-14T07:00:00-06:00",
//     "EpochDate": 1579006800,
//     "Temperature": {
//         "Minimum": {
//             "Value": 29,
//             "Unit": "F",
//             "UnitType": 18
//         },
//         "Maximum": {
//             "Value": 42,
//             "Unit": "F",
//             "UnitType": 18
//         }
//     },
//     "Day": {
//         "Icon": 6,
//         "IconPhrase": "Mostly cloudy",
//         "HasPrecipitation": false
//     },
//     "Night": {
//         "Icon": 38,
//         "IconPhrase": "Mostly cloudy",
//         "HasPrecipitation": false
//     },
//     "Sources": [
//         "AccuWeather"
//     ],
//     "MobileLink": "http://m.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=1&lang=en-us",
//     "Link": "http://www.accuweather.com/en/us/chicago-il/60608/daily-weather-forecast/348308?day=1&lang=en-us"
// }

export default DisplayWeatherContainer
