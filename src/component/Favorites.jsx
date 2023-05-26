import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Favorites(props) {

  const nav = useNavigate();



  return (
    <div>
      <h2 id='h1Title'>My Favorites</h2>
      <div id='forecastContainter2' onClick={()=>{nav('/')}}>
        {props.myFavoritePlaces.map((val) => {
          return <div className='forecastChild2'><h1>{val.name}</h1>
            {val.oneCityWeather.map((val) => {
              return <div>
                <h3>{val.Temperature.Metric.Value}{val.Temperature.Metric.Unit}</h3>
                <h5>{val.WeatherText}</h5>
              </div>
            })}
          </div>
        })}
      </div>

    </div>
  )
}
