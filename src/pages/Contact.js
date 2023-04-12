import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillTelephoneFill } from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { mobile } from '../devices'

const Container = styled.div`
padding:20px;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
background-color: ${props=>props.isDarkMode ? '#1E1E1E' : "white"};
`

const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
text-align: left ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
justify-content: center;
align-items:center;
padding:20px;`

const InputContainer= styled.div`
display:flex ;
flex-wrap:wrap ;
justify-content:center ;
align-items:center ;
`
const Input = styled.input`
background:transparent ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
font-size:18px;
padding:20px;
outline:none ;
    border: 1px solid #75BEC8;
    margin:10px;
    border-radius:10px ;
    &::placeholder{
        color:#75BEC8;
    }
`
const Textarea = styled.textarea`
background:transparent ;
color:white;
font-size:18px;
padding:20px;
height:200px;
width:60%;
outline:none ;
    border: 1px solid #75BEC8;
    margin:10px;
    border-radius:10px ;
    ${mobile(css`
    width:100%;`)}
    &::placeholder{
        color:#75BEC8;
    }
`
const Icons = styled.div`
display:flex;
flex-direction: column ;
justify-content:center;
align-items:center;
color: ${props=> props.isDarkMode ? '#75BEC8' : '#1E1E1E'};

> * {
    font-size: 30px ;
    margin: 20px 15px; ;
    cursor: pointer;
    transition:0.5s ease-in-out;
  }
  
  /* > *:hover, > *:active{
    transform: translateY(-7px) ;
    color:#fff;
    } */
`
const Text = styled.p`
color: ${props=> props.isDarkMode ? 'white' : '#1E1E1E'};
font-size: 20px ;
margin-left:10px ;
`
const ContactDetails= styled.div`
display:flex;
justify-content:center;
align-items:center;`

const Button = styled.button`
cursor: pointer;
background-color:#75BEC8;
color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
padding:15px 25px;
margin:20px ;
border:none;
border-radius: 30px ;
font-size: 20px;
transition:0.5s ease-in-out;
border: ${props=>!props.isDarkMode && '1px solid #75BEC8'};

&:hover, &:active{
    color: #75BEC8;
    background-color: white; ;
}
`

const Contact = ({isDarkMode}) => {
  return (
    
    <Container isDarkMode={isDarkMode}>
              <AnimationOnScroll duration={3} animateIn="animate__fadeIn">
              <Header isDarkMode={isDarkMode}>Get In Touch</Header>
      <Icons isDarkMode={isDarkMode}>
      <ContactDetails>
      <BsFillTelephoneFill />
      <Text isDarkMode={isDarkMode}>+961 78871728</Text>
      </ContactDetails>
      <ContactDetails>
      <MdEmail />
      <Text isDarkMode={isDarkMode}>hamoush@outlook.com</Text>
      </ContactDetails>

      </Icons>
              </AnimationOnScroll>
  
      <AnimationOnScroll animateIn="animate__bounceIn">
       <Form>
        <InputContainer>
        <Input isDarkMode={isDarkMode} type={'text'} placeholder={'Name*'}/>
        <Input isDarkMode={isDarkMode} type={'text'} placeholder={'Email*'}/>
        </InputContainer>
        <Textarea type={'text'} placeholder={'Message*'}/>
        <Button>Send Email</Button>
       </Form>
       </AnimationOnScroll>
    </Container>


  )
}

export default Contact
