import Compass from '../../assets/44.svg'
import icon from './../../assets/01d.svg'
import {
  ContainerSpace,
  ContainerWeatherData,
  Content,
  ContentDetailsRight,
  ContentImgLeft,
  ImgTitleContainer,
  TitleContainer,
} from './styled'
export default function CardWeather () {
  return (
    <>
      <Content>
        <TitleContainer>
          <ImgTitleContainer>
            <img src={Compass} alt='Bússola' />
          </ImgTitleContainer>

          <div>
            <p>Previsão do tempo</p>
            <p>Cidade</p>
          </div>
        </TitleContainer>

        <ContainerWeatherData color='#00008B'>
          <ContentImgLeft>
            <img src={icon} alt='clima' />
          </ContentImgLeft>
          <ContentDetailsRight>
            <ContainerSpace>
              <p>Hoje</p>
              <p> 20°C </p>
            </ContainerSpace>
            <div>
              <p> Céu Limpo</p>
            </div>
            <ContainerSpace>
              <p>Vento: 40 - KM/H</p>
              <p>Umidade: %</p>
              <p>Pressão: hPA</p>
            </ContainerSpace>
          </ContentDetailsRight>
        </ContainerWeatherData>
      </Content>
    </>
  )
}
