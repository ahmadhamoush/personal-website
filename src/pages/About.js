import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import me from '../images/me.png'
const Container = styled.div `
position:relative;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
display:flex;
flex-direction:column ;
text-align: center ;
padding:20px;
min-height:100vh;
`

const Image = styled.img`
object-fit:cover;
width:300px;
height:600px;
border-radius:20px;
`

const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const About = ({isDarkMode}) => {

  return (
    <Container id='about' isDarkMode ={isDarkMode}>
        <Nav  isDarkMode={isDarkMode} /> 
        <Header isDarkMode ={isDarkMode}>About</Header>

     
 
       
    <Image src={me} />
  

    </Container>
  )
}

export default About
