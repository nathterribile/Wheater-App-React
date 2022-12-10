import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 1080px;
    margin: auto;
    img {
        width: 200px;
      @media screen and (min-width: 600px) {
        width: 400px;
      }
    }
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 59px;
      margin-bottom: 24px;
      @media screen and (min-width: 600px) {
        font-size: 64px;
        line-height: 78px;
      }
    }
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 24px;
      @media screen and (min-width: 600px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
`
