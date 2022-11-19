import { Link } from 'react-router-dom' 
import Input from "../../components/Input";

export default function Home () {
  return (
    <>
    <Input />
    <Link to ="/testerotas">Testando rotas</Link>
    </>
  )
}