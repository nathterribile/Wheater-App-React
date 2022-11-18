import { Container } from "./styles";

export default function Input ({id, name, label}) {
  return (
    <>
    <Container>
    <input type="text" placeholder='digite aqui tal coisa'/>
    {/* <label htmlFor={id}>teste</label> */}
    </Container>
    </>
  )
}