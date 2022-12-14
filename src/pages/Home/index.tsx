import GlobalStyles from "@/styles/globalStyles";
import { useState, useContext } from "react";
import CardWeather from "../../components/CardWeather";
import Input from "../../components/Input";
import aceno from "../../assets/aceno.svg";
import search from "../../assets/search.svg";
import { Container } from "./styles";
import { CustomerContext } from "@/context/CustomerProviders";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const navigate = useNavigate();
  const { setLocation } = useContext(CustomerContext);

  const handleChange = (e: any) => {
    setCity(e.target.value);
  };
  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data);
        setCity("");
      });
  };
  const handleDetails = () => {
    if (!weatherForecast) return;
    navigate("/details");
    setLocation(weatherForecast);
  };

  return (
    <Container>
      <GlobalStyles />
      <h1>
        Olá <img src={aceno} alt="aceno" />
      </h1>
      <p className="firstP">
        Aqui você pode consultar o <br /> clima de qualquer cidade
      </p>
      <p>Insira, abaixo, o nome da cidade e do país</p>
      <input value={city} type="" onChange={handleChange} />
      <button onClick={handleSearch}>
        <img src={search} alt="" />
      </button>
      {weatherForecast ? (
        <div className="cardTemp" onClick={handleDetails}>
          <div className="itemsTemp">
            <h4 className="locationName">{weatherForecast.location.name}</h4>
            <p className="locationTemp">
              {weatherForecast.current.condition.text}
            </p>
          </div>
          <div className="itemsTemp">
            <p>{weatherForecast.current.temp_c}°C</p>
          </div>
          <div className="itemsTemp">
            <img src={weatherForecast.current.condition.icon} alt="" />
          </div>
        </div>
      ) : null}
    </Container>
  );
}
export default Home;
