import React, {useEffect} from 'react'
import axios from 'axios'
import SelectCityForm from './components'

const App = () => {

  const [locationKey, setLocationKey] = useState('')

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
  }, [])

  const resetLocationKey = key => {
    setLocationKey(key)
  }

  return (
    <div>
      <SelectCityForm locationKey={locationKey} resetLocationKey={resetLocationKey} />
    </div>
  )
}

export default App
