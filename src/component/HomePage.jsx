import React, { useState } from 'react'
import ForecastOneDay from './ForecastOneDay';





export default function HomePage(props) {

  const [places, setPlaces] = useState('')
  const [cityName, setCityName] = useState('tel aviv')




  const apiKey = 'vt9uegWdX9IkNo8snu7jA2IGGUEtL15c'



  const checkCity = () => {
    let result = props.myFavoritePlaces.find((val) => (val.name == places))
    if (result == undefined) {
      console.log('not in The Favorite')
    }
    else {
      console.log('in The Favorite')
    }

    for (let i = 0; i < places.length; i++) {
      if (places.charAt(i) < 'A' || places.charAt(i) > 'Z' && places.charAt(i) < 'a' || places.charAt(i) > 'z') {
        return false
      }


    

    }

    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${places}`)
      .then(res => res.json())
      .then((data) => {
        data.forEach((val) => {
          props.setCity(val.Key)
        })
        setCityName(places)
        props.setFlag(!props.flag)
      })
    return true
  }




  return (
    <div>

      <div>
        <br />
        <input type="text" placeholder='Write The Place' onChange={(e) => { setPlaces(e.target.value) }}></input>
        <div id='buttonsSearchDiv'>
          <button id='buttonSearch' onClick={checkCity}>Search</button>
        </div>
        <br />
        <div id='buttonsfavoriteDiv'>
          <button className='buttonAddfavorite' onClick={() => { props.addtoFavorite(places) }}>Add To Favorite</button>

          <button className='buttonRemovefavorite' onClick={() => { props.removefromFavorite(places) }}>Remove From Favorite</button>

        </div>
        <div id='defaultDiv'>
          <br />
          {props.oneCityWeather.map((val) => {
            return <ForecastOneDay val={val} cityName={cityName} fiveCityWeather={props.fiveCityWeather} />
          })}
        </div>




      </div>






    </div>


  )
}
