import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --color-text: #444444;
  --color-icons: #444444;
  --color-background-container: #CCB3D3;
  --color-background-cards: #EAE7EE;
  --color-border-input: #73ADC1;
  --color-background-input: #EAE7EE;
  --color-background-button: #73ADC1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background: linear-gradient(
    to right, #fb99a5, #f59db3, 
    #eca2bf, #e2a7c8, #d8accf, #cdaed3, #c1b0d6, 
    #b6b2d6, #a4b1d5, #92b0d1, #81afcb, #73adc1
    );
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    overflow-x: hidden;
    overflow-y: overlay;
}

body, input, button, a, h1 {
  font-family: 'Montserrat', sans-serif;
}

button, a {
    cursor: pointer;
    background-color: var(--color-background-button);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    color: var(--color-text);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`
