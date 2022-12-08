import { Container } from './styles'

interface IInput {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  type: string;
}

export default function Input ({ id, name, label, placeholder, type } : IInput) {
  // { id, name, label, placeholder }
  return (
    <>
      <Container>
        <input id={id} name={name} type={type} placeholder={placeholder} />
      </Container>
    </>
  )
}
