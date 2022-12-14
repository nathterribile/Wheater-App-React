import CardsDetails from '../cardsDetails';
import { Grid } from './styles';
import { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerProviders';

export default function GridDetails () {
  const { location } = useContext(CustomerContext);
  return (
    <Grid>
      <CardsDetails title='Vento' text={`${location.current.wind_kph} km/h`} />
      <CardsDetails title='Umidade' text={`${location.current.humidity}%`} />
      <CardsDetails title='Índice UV' text={`${location.current.uv}`} />
      <CardsDetails
        title='Visibilidade'
        text={`${location.current.vis_km} km`}
      />
    </Grid>
  );
}
