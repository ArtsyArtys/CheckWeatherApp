import React, {useEffect, useState} from 'react'
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector'

const SelectCityForm = (props) => {

  const [cityFormState, setCityFormState] = useState('')
  const [countryFormState, setCountryFormState] = useState('')

  useEffect(() => {

  }, [])

  const handleChange = evt => {
    setCityFormState(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit} className="weather-form-container">
      <h1 className="title">
        Enter City title here:
      </h1>

      <label className="label">Title</label>
      <div className="search-input-container">
        <input
          className="search-input"
          name="form"
          type="text"
          placeholder="Chicago, IL"
          value={cityFormState}
          onChange={handleChange}
        />
      </div>
    </form>
    </React.Fragment>
  )
}

export default SelectCityForm
