import ContainerDetails from "./components/containerDetails";
import { Container } from "./styles";
import { useContext } from "react";
import { CustomerContext } from "@/context/CustomerProviders";

export default function Details() {
  const { location } = useContext(CustomerContext);
  return (
    <Container>
      {location ? <ContainerDetails /> : <h1>Carregando...</h1>}
    </Container>
  );
}
