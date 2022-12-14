import styled from 'styled-components'

export const Card = styled.div`
background-color: var(--color-background-cards);
box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
width: 140px;
height: 87.5px;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;

@media screen and (min-width: 600px) {
  width: 160px;
  height: 100px;
  }

h3 {
  font-style: normal;
  font-weight: 400;
  font-size: 20px !important;
  line-height: 20px;
}

h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
`
