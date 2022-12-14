import { Card } from './styles'

export interface IDetails {
  title: string;
  text: string;
}

export default function CardsDetails ({ title, text }: IDetails) {
  return (
    <Card>
      <h3>{title}</h3>
      <h4>{text}</h4>
    </Card>
  )
}
