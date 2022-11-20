import {
  ContainerWeatherData,
  Content,
  ContentImgLeft,
  ContentDetailsRight,
  TitleContainer,
  ImgTitleContainer,
  ContainerSpace,
} from "./styled";
import Compass from "../../assets/44.svg";
import icon from "./../../assets/01d.svg";
export default function CardWeather() {
  return (
    <>
      <Content>
        <TitleContainer>
          <ImgTitleContainer>
            <img src={Compass} alt="Bússola" />
          </ImgTitleContainer>

          <div>
            <p>Previsão do tempo</p>
            <p>Cidade</p>
          </div>
        </TitleContainer>

        <ContainerWeatherData color="#00008B">
          <ContentImgLeft>
            <img src={icon} alt="clima"></img>
          </ContentImgLeft>
          <ContentDetailsRight>
            <ContainerSpace space="24px 0px">
              <p>Hoje</p>
              <p> 20°C </p>
            </ContainerSpace>
            <div>
              <p> Céu Limpo</p>
            </div>
            <ContainerSpace space="24px 0px">
              <p>Vento: 40 - KM/H</p>
              <p>Umidade: %</p>
              <p>Pressão: hPA</p>
            </ContainerSpace>
          </ContentDetailsRight>
        </ContainerWeatherData>
      </Content>
    </>
  );
}
