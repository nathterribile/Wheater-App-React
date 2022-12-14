import imagem404 from '../../assets/images/404-NotFound.svg'
import Button from './components/Button'
import { Container } from './styles'
export default function NotFound () {
  return (
    <Container>
      <h1>Oops...</h1>
      <img src={imagem404} alt='404' />
      <h2>Página não encontrada</h2>
      <Button />
    </Container>
  )
}
