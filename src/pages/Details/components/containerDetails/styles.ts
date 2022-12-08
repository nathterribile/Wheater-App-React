import styled from 'styled-components'

export const Container = styled.div`
padding: 80px 20px;
display: grid;
justify-items: center;
gap: 48px;
  @media screen and (min-width: 600px) {
    background-color: var(--color-background-container);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    width: 586px;
    height: auto;
    padding: 32px 102px;
  }

  @media screen and (min-width: 1024px) {
    width: 813px;
    padding: 32px;
  }

h3 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  @media screen and (min-width: 600px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
    line-height: 39px;
  }
}

img {
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 209.62px;
  height: auto;

  @media screen and (min-width: 600px) {
    width: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 327px;
  }
}
`

export const ContentTemperature = styled.div`
display: flex;
flex-direction: column;
gap: 8px;

h4 {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media screen and (min-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
    line-height: 39px;
  }
}

h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;

  @media screen and (min-width: 600px) {
    font-size: 40px;
    line-height: 49px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 64px;
    line-height: 78px;
  }
}
`

export const ContentWeather = styled.div`
display: grid;
justify-items: stretch;
grid-template-columns: repeat(2, 1fr);
align-items: center;

h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;

  @media screen and (min-width: 600px) {
    font-size: 40px;
    line-height: 49px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 59px;
  }
}
`

export const ContentImage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 54px;

@media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`
