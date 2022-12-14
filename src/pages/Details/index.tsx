import ContainerDetails from './components/containerDetails';
import { Container } from './styles';
import { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerProviders';
import { FaArrowLeft } from 'react-icons/fa'

export default function Details () {
  const { location } = useContext(CustomerContext);
  return (
    <Container>
      <div className='return'><img src={FaArrowLeft} alt='return' /></div>
      {location ? <ContainerDetails /> : <h1>Carregando...</h1>}
    </Container>
  );
}
