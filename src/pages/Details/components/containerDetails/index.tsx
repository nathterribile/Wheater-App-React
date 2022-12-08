import GridDetails from '../gridDetails'
import imagemNeve from '../../../../assets/images/neve.svg'
import { Container, ContentTemperature, ContentWeather, ContentImage } from './styles'

export default function ContainerDetails () {
  return (
    <Container>
      <h3>Cidade, País</h3>
      <ContentWeather>
        <ContentTemperature>
          <h4>Hoje</h4>
          <h1>18°</h1>
        </ContentTemperature>
        <h2>Nevando</h2>
      </ContentWeather>
      <ContentImage>
        <img src={imagemNeve} alt='neve' />
        <GridDetails />
      </ContentImage>

    </Container>
  )
}
