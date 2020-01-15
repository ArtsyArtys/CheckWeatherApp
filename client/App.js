import "@babel/polyfill"
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {SelectCityForm} from './components'

const App = () => {

  const [locationKey, setLocationKey] = useState('')
  const [locationWeather, setLocationWeather] = useState({})

  useEffect(() => {
    const fetchIPLocationKey = async () => {
      try {
        const {data} = await axios.get('/api/location')
        if (data) {
          setLocationKey(data)
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchIPLocationKey()
  }, [])

  const resetLocationKey = key => {
    setLocationKey(key)
  }
  const resetLocationWeather = weatherObj => {
    setLocationWeather(weatherObj)
  }

  return (
    <div>
      <SelectCityForm locationKey={locationKey} resetLocationKey={resetLocationKey} />
    </div>
  )
}

export default App
