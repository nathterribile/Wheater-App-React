import GlobalStyles from '@/styles/globalStyles'
import { useState } from 'react'
import CardWeather from '../../components/CardWeather'
import Input from '../../components/Input'
import aceno from '../../assets/aceno.svg'
import search from '../../assets/search.svg'
import { Container } from './styles'

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
    <Container>
      <GlobalStyles />
      <h1>Olá <img src={aceno} alt='aceno' /></h1>
      <p className='firstP'>Aqui você pode consultar o <br /> clima de qualquer cidade</p>
      <p>Insira, abaixo, o nome da cidade e do país</p>
      <input value={city} type='' onChange={handleChange} />
      <button onClick={handleSearch}><img src={search} alt="" /></button>
      {watherForecast
        ? (
          <div className='cardTemp'>
            <div className='itemsTemp'>

              <h4 className='locationName'>
                {watherForecast.location.name}
              </h4>
              <p className='locationTemp'>
                {watherForecast.current.condition.text}
              </p>
            </div>
            <div className='itemsTemp'>
              <p>{watherForecast.current.temp_c}°C</p>
            </div>
            <div className='itemsTemp'>
              <img src={watherForecast.current.condition.icon} alt='' />
            </div>
          </div>
          )
        : null}
      {/* <CardWeather /> */}
    </Container>
  )
}
export default Home
