import Compass from '../../assets/44.svg'
import icon from './../../assets/01d.svg'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import moment from 'moment'
import { ContainerSpace, ContainerWeatherData, Content, ContentDetailsRight, ContentImgLeft, ImgTitleContainer,TitleContainer } from './styled'
export default function CardWeather () {
  const [previsao, setPrevisao] = useState([])
  const [data, setData] = useState('')
  const [nome, setNome] = useState('')
  const [temperatura, setTemperatura] = useState('')
  const [umidade, setUmidade] = useState('')
  const [vento, setVento] = useState('')
  const [pressao, setPressao] = useState('')
  useEffect(() => {
    api.get('weather', {
      params: {
        lon: '-0.1257',
        lat: '51.5085',
        lang: 'pt_br',
        units: 'metric',
        appid: 'edc7ecdd8e2ba0408a1c09af3d42884d' }}
    ).then((response) => {
      console.log(response)
      setData(moment(Date(response.data.dt)).format('DD MM YYYY'))
      setPrevisao(response.data.weather)
      setNome(response.data.name)
      setTemperatura(response.data.main.temp)
      setUmidade(response.data.main.humidity)
      setVento(response.data.wind.speed)
      setPressao(response.data.main.pressure)
    })
  }) 
  return (
    <>
      <Content>
        <TitleContainer>
          <ImgTitleContainer>
            <img src={Compass} alt='Bússola' />
          </ImgTitleContainer>

          <div>
            <p>{previsao.map(item =>
            <p key={item.description}>{item.description}</p>
              )}
            </p>
            <p>{nome}</p>            
          </div>
        </TitleContainer>

        <ContainerWeatherData color='#00008B'>
          <ContentImgLeft>
            <img src={icon} alt='clima' />
          </ContentImgLeft>
          <ContentDetailsRight>
            <ContainerSpace>
              <p>{data}</p>
              <p>Temperatura: {temperatura}°C </p>
            </ContainerSpace>
            <ContainerSpace>
              <p>Vento: {vento}Km/h</p>
              <p>Umidade: {umidade}%</p>
              <p>Pressão: {pressao}hPA</p>
            </ContainerSpace>
          </ContentDetailsRight>
        </ContainerWeatherData>
      </Content>
    </>
  )
}
