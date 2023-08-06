import React from 'react'
import styled, { css } from 'styled-components'
import Terminal from '../components/Terminal'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { tablet } from '../devices'
import Nav from '../components/Nav'

const Container = styled.div `
position:relative;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
display:flex;
flex-direction:column ;
text-align: center ;
padding:20px;
min-height:100vh;
`
const LandingContainer = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
padding: 20px;
margin-top:50px;
${tablet(css`
flex-direction: column-reverse;
margin-top:0;
   `)};

`

const Left = styled.div`
display:flex;
flex-direction: column ;
justify-content:space-between;
align-items:center;

${tablet(css`
margin:0;
   `)};
`
const TopLeft = styled.div`
margin:20px;
>button{
    margin:20px;
}
`

const Right = styled.div`

`
const Header = styled.h1`
font-size:50px;
color: ${props=> props.isDarkMode ? 'white' : '#1E1E1E'};
font-weight:bold;`

const Button = styled.button`
cursor: pointer;
background-color:#75BEC8;
color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
padding:15px 25px; 
border-radius: 30px ;
font-size: 20px;
transition:0.5s ease-in-out;
border: ${props=>!props.isDarkMode ? '1px solid #75BEC8' :'1px solid #1e1e1e'};

&:hover, &:active{
    color: #75BEC8;
    background-color: white; ;
}
`
const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
color: ${props=> props.isDarkMode ? 'white' : '#1E1E1E'};

> * {
    font-size: 30px ;
    margin: 20px 15px; ;
    cursor: pointer;
    transition:0.5s ease-in-out;
  }
  
  > *:hover, > *:active{
    transform: translateY(-7px) ;
    color:#75BEC8;
}
`

const Landing = ({isDarkMode}) => {
  return (

    <Container id='home' isDarkMode = {isDarkMode}>
        <Nav isDarkMode={isDarkMode} /> 
       <LandingContainer>
  
       <Left>
       <TopLeft>
       <Header isDarkMode = {isDarkMode}>
            Web Developer
        </Header>
        <Button onClick={()=>window.location.href='cv.pdf'} isDarkMode = {isDarkMode}>Download Resume</Button>
       </TopLeft>
        <Icons  isDarkMode = {isDarkMode}>
        <BsInstagram  onClick={()=>window.location.href='https://www.instagram.com/hamoush1/'} />
        <BsGithub onClick={()=>window.location.href='https://github.com/ahmadhamoush'} />
        <BsLinkedin onClick={()=>window.location.href='https://www.linkedin.com/in/ahmad-hamoush-63b374204/'}/>
        </Icons>
       
        </Left>
        <Right>
 
        <Terminal />

  
        </Right>
       </LandingContainer>
    </Container>
  )
}

export default Landing