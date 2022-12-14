import GridDetails from "../gridDetails";
import Neve from "../../../../assets/images/neve.svg";
import Chuva from "../../../../assets/images/chuva.svg";
import Sol from "../../../../assets/images/ensolarado.svg";
import Nublado from "../../../../assets/images/nublado.svg";
import Trovejando from "../../../../assets/images/trovejando.svg";
import Vento from "../../../../assets/images/ventando.svg";
import {
  Container,
  ContentTemperature,
  ContentWeather,
  ContentImage,
} from "./styles";
import { useContext } from "react";
import { CustomerContext } from "@/context/CustomerProviders";

export default function ContainerDetails() {
  const { location } = useContext(CustomerContext);

  const handleImage = () => {
    if (location.current.condition.text.includes("neve")) {
      return Neve;
    } else if (
      location.current.condition.text.toLowerCase().includes("chuva")
    ) {
      return Chuva;
    } else if (location.current.condition.text.toLowerCase().includes("sol")) {
      return Sol;
    } else if (
      location.current.condition.text.toLowerCase().includes("nublado")
    ) {
      return Nublado;
    } else if (
      location.current.condition.text.toLowerCase().includes("trovoadas")
    ) {
      return Trovejando;
    } else if (
      location.current.condition.text.toLowerCase().includes("vento")
    ) {
      return Vento;
    } else {
      return location.current.condition.icon;
    }
  };

  return (
    <Container>
      <h3>{`Cidade: ${location.location.name}`}</h3>
      <h3>{`País: ${location.location.country}`}</h3>
      <ContentWeather>
        <ContentTemperature>
          <h4>Hoje</h4>
          <h1>{location.current.temp_c} °C</h1>
        </ContentTemperature>
        <h2>{location.current.condition.text}</h2>
      </ContentWeather>
      <ContentImage>
        <img src={handleImage()} alt={location.current.condition.text} />
        <GridDetails />
      </ContentImage>
    </Container>
  );
}
