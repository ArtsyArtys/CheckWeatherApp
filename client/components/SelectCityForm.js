import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'

const SelectCityForm = props => {

  const [countryFormState, setCountryFormState] = useState('US')
  const [regionFormState, setRegionFormState] = useState('IL') // TODO: base on IP address
  const [cityFormState, setCityFormState] = useState('') // TODO: base on IP address

  useEffect(() => {

  }, [])

  const handleChange = evt => {
    setCityFormState(evt.target.value)
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    const useLocationKeyResponse = async locationKey => {
      if (props.locationKey !== locationKey) {
        props.resetLocationKey(locationKey)
      }
      console.log(locationKey);
      const {data} = await axios.get(`api/forecast/${locationKey}`)
      console.log(data)
      props.resetLocationWeather(data)
    }
    try {
      if ( /^\d+$/.test(cityFormState) ) {
        const response = await axios.get(`/api/location/postalCode/${countryFormState}?input=${cityFormState}, ${regionFormState}`)
        const locationKey = response.data
        await useLocationKeyResponse(locationKey)
      }
      else {
        const response = await axios.get(`/api/location/city/${countryFormState}?input=${cityFormState}, ${regionFormState}`)
        const locationKey = response.data
        await useLocationKeyResponse(locationKey)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit} className="weather-form-container">
      <h1 className="title">
        Enter desired location:
      </h1>

      <div className="country-dropdown-container">
        <label className="label">Country</label>
        <CountryDropdown
          value={countryFormState}
          valueType="short"
          onChange={(val) => setCountryFormState(val)}
        />
      </div>
      <div className="region-dropdown-label">
        <label className="label">Region/State</label>
        <RegionDropdown
          country={countryFormState}
          value={regionFormState}
          valueType="short"
          countryValueType="short"
          onChange={(val) => setRegionFormState(val)}
        />
      </div>
      <div className="search-input-container">
      <label className="label">City or Postal(zip) code</label>
        <input
          className="search-input"
          name="form"
          type="text"
          placeholder="Chicago"
          value={cityFormState}
          onChange={handleChange}
        />
      </div>
      <div className="submit-location-button-container">
        <button type="submit" className="submit-location-button">
          Check weather
        </button>
      </div>
    </form>
    </React.Fragment>
  )
}

export default SelectCityForm
