import styled from 'styled-components'

export interface IInput {
  id: number;
  name: string;
  label: string;
}

export const Container = styled.div`
  height: 32px;
  max-width: 350px;
  align-items: center;
  display: flex;
  position: relative;
  padding: 6px;

  border: 2px solid transparent;
  border-radius: 50em;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`
