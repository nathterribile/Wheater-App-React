import styled from 'styled-components'

export const Container = styled.main`
@media (min-width:480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 1080px;
    margin: auto;
}
h1 {
    display: flex;
    border: 1px solid red;
}
`
