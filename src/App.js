
import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import Favorites from './component/Favorites';
import Buttons from './component/Buttons';

function App() {

  const [city, setCity] = useState('215854')
  const [oneCityWeather, setOneCityWeather] = useState([])
  const [fiveCityWeather, setFiveCityWeather] = useState([])
  const [flag, setFlag] = useState(false)
  const [myFavoritePlaces, setMyFavoritePlaces] = useState([])


  const apiKey = 'vt9uegWdX9IkNo8snu7jA2IGGUEtL15c'




  useEffect(() => {
    try {
      fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
          setOneCityWeather(data)
        })
        .catch((err) => {
          if (err) throw err
        })
    }
    catch (err) {
      console.log(err);
    }

  }, [flag])




  useEffect(() => {
    try {
      fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=${apiKey}&metric=true`)
        .then(res => res.json())
        .then((data) => {
          setFiveCityWeather(data)
        })
        .catch((err) => {
          if (err) throw err
        })
    } catch (err) {
    }

  }, [flag])




  const addtoFavorite = (name) => {
    let result = myFavoritePlaces.find((val) => (val.name == name))
    if (result == undefined) {
      setMyFavoritePlaces([...myFavoritePlaces, { oneCityWeather, name }])
    }
  }



  const removefromFavorite = (name) => {
    let filterofFav = myFavoritePlaces.filter((val) => (val.name != name))
    setMyFavoritePlaces(filterofFav)
  }



  return (
    <div className="App">

      <h1 id='h1Title'>WeatherApi</h1>

      <BrowserRouter>

        <Buttons />

        <Routes>

          <Route path='/' element={<HomePage addtoFavorite={addtoFavorite} removefromFavorite={removefromFavorite} fiveCityWeather={fiveCityWeather} setCity={setCity} flag={flag} setFlag={setFlag} oneCityWeather={oneCityWeather} myFavoritePlaces={myFavoritePlaces} />} />
          <Route path='/favorite' element={<Favorites myFavoritePlaces={myFavoritePlaces} />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
