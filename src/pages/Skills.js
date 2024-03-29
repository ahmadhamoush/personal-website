import React from 'react'
import styled, { css } from 'styled-components'
import { mobile, tablet } from '../devices'
import skills from '../skills-data'
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
const Header = styled.h1 `
font-size:30px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`
const SkillHeader = styled.h2 `
font-size:20px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`
const Circles = styled.div `
display:flex;
justify-content:center;
align-items:center;

flex-wrap:wrap;`

const Circle = styled.div `
background-image: url(${props=>props.bg}) ;
width:120px;
height:120px;
background-position:center;
background-size:cover;
border-radius:50%;
margin: 15px;
cursor: pointer;
transition:0.5s ease-in-out;

&:hover{
  transform:scale(1.1);
}
&:hover::after{
  opacity:1
}
&::after{
  content: '${props=>props.level}';
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:16px;
  background-color:#0000009e;
  width:inherit;
  height:inherit;
  border-radius:inherit;
  z-index:1111;
  color:#fff;
  opacity:0;
  transition:0.5s ease-in-out;
}
${tablet(css`
  width:100px;
height:100px;
  `)}
  ${mobile(css`
  width:80px;
height:80px;
  `)}`


const Skills = ({isDarkMode}) => {
  return (
    <Container id='skills' isDarkMode={isDarkMode}>
        <Nav  isDarkMode={isDarkMode} /> 
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Header isDarkMode={isDarkMode} >Skills</Header>
        </Animate>
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <SkillHeader isDarkMode={isDarkMode} >Programming</SkillHeader>
        </Animate>

        <Circles>
           {skills[0].map(item=>{
            return(
              <Animate play start={{transform:'scale(0) rotate(360deg)',opacity:'0'}} end={{transform:'scale(1) rotate(0)',opacity:'1'}}>
                  <Circle level={item.level} key={item.id} bg={item.img} />
              </Animate>

     
          
            )
           })}
        </Circles>
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <SkillHeader isDarkMode={isDarkMode} >Frontend</SkillHeader>
        </Animate>

        <Circles>
           {skills[1].map(item=>{
            return(
              <Animate play start={{transform:'scale(0) rotate(360deg)',opacity:'0'}} end={{transform:'scale(1) rotate(0)',opacity:'1'}}>
          <Circle level={item.level} key={item.id} bg={item.img} />     
              </Animate>
              
 
            )
           })}
        </Circles>
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <SkillHeader isDarkMode={isDarkMode} >Backend</SkillHeader>
        </Animate>

        <Circles>
           {skills[2].map(item=>{
            return(
              <Animate play start={{transform:'scale(0) rotate(360deg)',opacity:'0'}} end={{transform:'scale(1) rotate(0)',opacity:'1'}}>
              <Circle level={item.level} key={item.id} bg={item.img} />
              </Animate>


            )
           })}
        </Circles>
    </Container>
  )
}

export default Skills