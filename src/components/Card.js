import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:250px;
height:350px;
background-image: url(${props=>props.image});
background-repeat: no-repeat;
background-position:center;
background-size:cover;
border-radius:20px;
margin: 50px 30px ;
cursor: pointer;
transition: 0.5s ease-in-out ;

&:hover{
   transform:scale(1.05) ;
}
`
const Card = ({image}) => {
  return (
    <Container image={image}>

    </Container>
  )
}

export default Card
