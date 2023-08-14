import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { mobile } from '../devices'
import Nav from '../components/Nav'
import { Animate } from 'react-simple-animate'
const Container = styled.div `
position:relative;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
display:flex;
flex-direction:column ;
text-align: center ;
padding:20px;
min-height:100vh;
`

const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
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

  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [message,setMessage] = useState('')

  return (
    
    <Container id='contact' isDarkMode={isDarkMode}>
     <Nav isDarkMode={isDarkMode} /> 
     <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
     <Header isDarkMode={isDarkMode}>Get In Touch</Header>
     </Animate>
        
      <Icons isDarkMode={isDarkMode}>
      <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
      <ContactDetails>
      <BsFillTelephoneFill />
      <Text isDarkMode={isDarkMode}>+961 78871728</Text>
      </ContactDetails>
      </Animate>
      <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
      <ContactDetails>
      <MdEmail />
      <Text isDarkMode={isDarkMode}>hamoush@outlook.com</Text>
      </ContactDetails>
      </Animate>


      </Icons>

  

       <Form>
        <InputContainer>
        <Animate play start={{transform:'scale(0) translateX(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Input value={name} onChange={(e)=>setName(e.target.value)} isDarkMode={isDarkMode} type={'text'} placeholder={'Name*'}/>
        </Animate>
        <Animate play start={{transform:'scale(0) translateX(300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} isDarkMode={isDarkMode} type={'email'} placeholder={'Email*'}/>
        </Animate>
        </InputContainer>
        <Animate play start={{transform:'scale(0) translateY(300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1',width:'100%'}}>
        <Textarea value={message} onChange={(e)=>setMessage(e.target.value)} type={'text'} placeholder={'Message*'}/>
        </Animate>
        <Animate play start={{transform:'scale(0) translateY(300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Button>Send Email</Button>
        </Animate>
       </Form>

    </Container>


  )
}

export default Contact
