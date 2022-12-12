import { useState } from 'react'
import CardWeather from '../../components/CardWeather'
import Input from '../../components/Input'

function Home () {
  const [city, setCity] = useState('')
  const [watherForecast, setWatherForecast] = useState(null)
  const handleChange = (e: any) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`).then((response) => {
      if (response.status === 200) {
        return response.json()
      }
    }).then((data) => {
      setWatherForecast(data)
      setCity('')
    })
  }

  return (
    <>
      <input value={city} type='' onChange={handleChange} />
      <button onClick={handleSearch}>click</button>
      {watherForecast ? (
        <div>
          <div> 

          <h4>
            {watherForecast.location.name}
          </h4>
          <p>
            {watherForecast.current.condition.text}
          </p>
          </div>
          <div>
            {watherForecast.current.temp_c}
          </div>
          <div>
            <img src={watherForecast.current.condition.icon} alt="" />
          </div>
        </div>
      ): null}
      {/* <CardWeather /> */}
    </>
  )
}
export default Home;