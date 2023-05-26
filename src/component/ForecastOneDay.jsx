import React, { useState } from 'react'

export default function ForecastOneDay(props) {

  const [days, setDays] = useState(['sun', 'mon', 'tue', 'Wed', 'Thu'])

  return (
    <div>
      <div id='forecastContainter'>
        <div className='forecastChild'>
          <h1>{props.cityName}</h1>
          <h3>{props.val.Temperature.Metric.Value}{props.val.Temperature.Metric.Unit}</h3>
          <h5>{props.val.WeatherText}</h5>

        </div>
        
      </div>
      <br /> <br /><br /><br />

      <div id='forecastContainter2'>
        {props.fiveCityWeather.DailyForecasts.map((val, index) => {
          return <div className='forecastChild2'>
            <h1>{days[index]}</h1>
            <h3>{val.Temperature.Maximum.Value}{val.Temperature.Maximum.Unit}</h3>
            <h5>{val.Day.IconPhrase}</h5>
          </div>
        })}
      </div>
    </div>
  )
}
