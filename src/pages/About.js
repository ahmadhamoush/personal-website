import React from 'react'
import styled, { css } from 'styled-components'
import Nav from '../components/Nav'
import me from '../images/me.png'
import { tablet } from '../devices'
import { Animate } from 'react-simple-animate'
const Container = styled.div `
position:relative;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
display:flex;
flex-direction:column ;
text-align: center ;
padding:20px;
min-height:100vh;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
gap:20px;
padding:20px;
text-align:left;
${tablet(css`
flex-direction: column-reverse;
align-items:center;
   `)};
   
   `
const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight:bold;
`;
const Name = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color:#75BEC8;
  text-align:center;
`;
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
const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ExperienceItem = styled.div`
  margin: 10px 0;
`;

const DateRange = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.p`
  margin: 5px 0;
  margin-bottom:20px;
`;



const About = ({isDarkMode}) => {

  return (
    <Container id='about' isDarkMode ={isDarkMode}>
        <Nav  isDarkMode={isDarkMode} /> 
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Header isDarkMode ={isDarkMode}>About</Header>
        </Animate>
      
<Wrapper>
    <div>
    <Animate play start={{transform:'scale(0) translateX(-300px)',opacity:'0'}} end={{transform:'scale(1) translateX(0)',opacity:'1'}}>
    <Name>Ahmad Hamoush</Name>
    <ExperienceItem>
        <Title>Experience</Title>
        <Subtitle>Full Stack Freelancer</Subtitle>
        <DateRange>06/2022 to Present</DateRange>
        <Description>
          As a freelancer developer, I have had the opportunity to work on various projects utilizing React, Next.js, and MongoDB. With a focus on building dynamic and scalable web applications, I have successfully delivered high-quality solutions for my clients.
        </Description>
      </ExperienceItem>
      <ExperienceItem>
        <Subtitle>Web Developer Internship - Patibon, Beirut, Lebanon</Subtitle>
        <DateRange>Duration</DateRange>
        <Description>Developed an e-commerce website</Description>
      </ExperienceItem>
      <ExperienceItem>
        <Subtitle>Operations Manager Assistant - Caline FZE, Dubai, UAE</Subtitle>
        <DateRange>02/2022 to 05/2022, 11/2021 to 01/2022</DateRange>
        <Description>
          - Managed database using SQL.
          - Inserted, updated, and removed items in the database.
          - Loaded purchase orders into the system.
          - Created a layout of packaged items acquired from the database with details and description of the item with item code and the number of items scanned along with shipment details including invoice number, packing/delivery date, import location, and export location.
        </Description>
      </ExperienceItem>

      <Title>Education</Title>
      <Description>
        2018-2019: SE English baccalaureate at Lebanese Evangelical School Louizeh.
        <br />
        2019-2023 BA in Computer Science at Lebanese American University.
      </Description>
      <Title>Certifications</Title>
      <Description>
      The Complete 2022 Web Development Bootcamp (App Brewery)
      </Description>
    </Animate>
   
    </div>
    <Animate play start={{transform:'scale(0) translateX(300px)',opacity:'0'}} end={{transform:'scale(1) translateX(0)',opacity:'1'}}>
    <Image src={me} />
    </Animate>

</Wrapper>

  

    </Container>
  )
}

export default About
