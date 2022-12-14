import styled from 'styled-components'

export const Grid = styled.div`
width: 297px;
height: auto;
display: grid;
gap: 24px 16px;
justify-content: center;
grid-template-columns: repeat(2, 1fr);

@media screen and (min-width: 600px) {
  gap: 24px 54px;
}

@media screen and (min-width: 1024px) {
  gap: 34px;
}
`
