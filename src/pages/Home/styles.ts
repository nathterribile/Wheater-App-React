import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  
  

h1 {
  font-size: 64px;
}
.firstP {
  font-size: 24px;
}

.containerSearch{
  display: flex;
  justify-content:space-around;
  width: 500px;
}

p {
  font-size: 20px;
  margin-top: 48px;
  margin-bottom: 16px;
}


input {
width: 450px;
height: 44px;
left: 437px;
top: 487px;
background: #EAE7EE;
border: 1px solid #73ADC1;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px 0px 0px 18px;
padding-left: 16px;
}
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
button {

  display: flex;
  justify-content:center;
  align-items:center;
  height: 44px;
  width: 50px;
  box-shadow: 0 0 0 0;
  outline: 0;
  background-color: #EAE7EE;
  border-radius: 0px 18px 18px 0px;
  border: 1px solid #73ADC1;
  border: none;
}

.cardTemp {
  margin-top: 20px;
  width: 444px;
  height: 100px;
  background: #EAE7EE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  display: flex;
  justify-content: space-around; 
  flex-direction: row;
  margin-left: 30px;

  
}


.locationName{
  font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
width: 160px;
margin-top: 14px;
}
.locationTemp {
  margin-top: 20px;
  font-size: 18px;
}
`
