import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import {tablet } from '../devices'
import { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
position:sticky;
top:0;
display: flex ;
justify-content: space-between ;
align-items: center ;
padding: 20px;
z-index:1111;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
background-color: ${props=>props.isDarkMode ? '#1e1e1e' : 'white'};
${tablet(css`
padding:0px;
`)};
`
const Logo = styled.h2`
font-size:30px;
cursor: pointer;
`
const Input = styled.input`
display: none ;

&:checked ~ ul{
    position:absolute ;
    top:0;
    left:0;
    height:100vh;
    width: 100% ;
    display: flex ;
    flex-direction:column ;
}
&:checked ~ ul>*{
margin:10px ;
font-size:30px ;
}
&:checked~ label span::before{
    top:0;
    transform:rotate(-45deg) ;
}
&:checked~ label span::after{
    top:0;
    transform:rotate(45deg) ;
}
&:checked~ label span{
   background: transparent ;
}
`
 const Hamb = styled.label`
   cursor: pointer;
float: right;
padding: 40px 20px;
z-index:2;
display:none;


${tablet(css`
display:block;
`)};`


 const HambLine = styled.span`
 background: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
display: block;
height: 2px;
position: relative;
width: 24px;

&::before,&::after{
    background: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
content: '';
display: block;
height: 100%;
position: absolute;
transition: all .2s ease-out;
width: 100%;
}

&::before{
    top:7px;
}
&::after{
    top:-7px;
}
 `
const NavContainer = styled.ul`
display:flex;
justify-content:center;
align-items:center ;
background: ${props=>props.isDarkMode ? '#1E1E1E' : 'white'};
z-index:1;

${tablet(css`display:none;`)};
`
const NavItem = styled.a`
margin: 0 10px;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
font-size:20px;
list-style:none;
cursor: pointer;
transition: 0.5s ease-in-out;
&:hover{
color:#75BEC8;
}
`


const Nav = ({isDarkMode}) => {

    const[navToggled, setNavToggled] = useState(false);

    useEffect(()=>{
        if(navToggled){
            document.querySelector('body').style.overflow = 'hidden'
        }else{
            document.querySelector('body').style.overflow = 'visible'
        }
        console.log(navToggled)
    },[navToggled])

  return (
    <Container isDarkMode={isDarkMode}>
        <Logo isDarkMode = {isDarkMode}>HAMOUSH</Logo>
        <Input id={'menu' }type={'checkbox'}/>
        <Hamb onClick={()=>setNavToggled(!navToggled)} htmlFor={'menu'}><HambLine isDarkMode={isDarkMode} /></Hamb>
        <NavContainer isDarkMode={isDarkMode}>
        <Link style={{textDecoration:'none'}} to='/'><NavItem isDarkMode={isDarkMode}>Home</NavItem></Link>
        <Link style={{textDecoration:'none'}} to='/about'><NavItem isDarkMode={isDarkMode}>About</NavItem></Link>
        <Link style={{textDecoration:'none'}} to='/projects'><NavItem isDarkMode={isDarkMode}>Projects</NavItem></Link>
        <Link style={{textDecoration:'none'}} to='/services'><NavItem isDarkMode={isDarkMode}>Services</NavItem></Link>
        <Link style={{textDecoration:'none'}} to='/skills'><NavItem isDarkMode={isDarkMode}>Skills</NavItem></Link>
        <Link style={{textDecoration:'none'}} to='/contact'><NavItem isDarkMode={isDarkMode}>Contact</NavItem></Link>
        </NavContainer>
    </Container>
 
         
  )
}

export default Nav
