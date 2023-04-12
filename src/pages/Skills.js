import React from 'react'
import styled, { css } from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { mobile, tablet } from '../devices'
import skills from '../skills-data'

const Container = styled.div `
padding:20px;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
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
background-position:center ;
background-size:cover ;
border-radius:50%;
margin: 15px;
cursor: pointer;
transition:0.5s ease-in-out;

&:hover{
  width:130px;
  height:130px;
}
${tablet(css`
  width:100px;
height:100px;
&:hover{
  width:110px;
  height:110px;
}
  `)}
  ${mobile(css`
  width:80px;
height:80px;
&:hover{
  width:90px;
  height:90px;
}
  `)}`

const Skills = ({isDarkMode}) => {
  return (
    <Container isDarkMode={isDarkMode}>
        <Header isDarkMode={isDarkMode} >Skills</Header>
        <SkillHeader isDarkMode={isDarkMode} >Programming</SkillHeader>
        <Circles>
           {skills[0].map(item=>{
            return(
              <AnimationOnScroll animateIn="animate__rollIn">
                  <Circle key={item.id} bg={item.img} />
             </AnimationOnScroll>
          
            )
           })}
        </Circles>
        <SkillHeader isDarkMode={isDarkMode} >Frontend</SkillHeader>
        <Circles>
           {skills[1].map(item=>{
            return(
              <AnimationOnScroll animateIn="animate__rollIn">
              <Circle key={item.id} bg={item.img} />
         </AnimationOnScroll>
            )
           })}
        </Circles>
        <SkillHeader isDarkMode={isDarkMode} >Backend</SkillHeader>
        <Circles>
           {skills[2].map(item=>{
            return(
              <AnimationOnScroll animateIn="animate__rollIn">
              <Circle key={item.id} bg={item.img} />
         </AnimationOnScroll>
            )
           })}
        </Circles>
    </Container>
  )
}

export default Skills