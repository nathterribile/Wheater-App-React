import CardsDetails from '../cardsDetails'
import { Grid } from './styles'

export default function GridDetails () {
  return (
    <Grid>
      <CardsDetails
        title='Vento'
        text='11 km/h'
      />
      <CardsDetails
        title='Umidade'
        text='10%'
      />
      <CardsDetails
        title='Índice UV'
        text='0'
      />
      <CardsDetails
        title='Visibilidade'
        text='16,1 km'
      />
    </Grid>
  )
}
