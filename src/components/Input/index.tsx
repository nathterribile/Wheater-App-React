import { Container } from './styles';

// interface IInput {
//   id: string;
//   name: string;
//   label: string;
//   placeholder: string;
// }

export default function Input () {
  // { id, name, label, placeholder }
  return (
    <>
      <Container>
      <input type='text' placeholder='digite tal coisa' />
      </Container>
    </>
  );
}
