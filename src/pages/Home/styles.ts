import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  
  

h1 {
  font-size: 64px;
}
.firstP {
  font-size: 24px;
}
p {
  font-size: 20px;
  margin-top: 48px;
  margin-bottom: 16px;
}


input {

width: 444px;
height: 44px;
left: 437px;
top: 487px;

background: #EAE7EE;
border: 1px solid #73ADC1;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
padding-right: 50px;
}
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
button {
  
  box-shadow: 0 0 0 0;
  outline: 0;
  margin-left: -50px;
  background: none;
  border: none;
}

.cardTemp {
  /* border: 1px solid red; */
  margin-top: 20px;
  
  width: 444px;
  height: 100px;
  background: #EAE7EE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  
  display: flex;
  /* justify-content: center;  */
  justify-content: space-around; 
  /* align-items: center; */
  flex-direction: row;
  margin-left: 30px;
  /* gap: 150px; */
  
}
.itemsTemp {
  /* border: 1px solid red; */
  /* width: 100px; */
}

.locationName{
  font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
width: 160px;
margin-top: 14px;
/* margin-left: 10px; */
}
.locationTemp {
  margin-top: 20px;
  font-size: 18px;
}
`
