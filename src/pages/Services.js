import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import { Animate } from 'react-simple-animate';


const Container = styled.div `
position:relative;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
color: ${props=> props.isDarkMode ? '#fff' : '#1E1E1E'};
display:flex;
flex-direction:column ;
padding:20px;
min-height:100vh;
`
const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const ServicePrice = styled.p`
  font-size: 1.25rem;
`;


const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const ServicesList = ({isDarkMode}) => {
    const services = [
        {
          title: 'Custom Web Application',
          description: 'Build and deploy tailored web applications with modern technologies and user-friendly interfaces.',
          price: '$1500 - $3000',
        },
        {
          title: 'Responsive Website Design',
          description: 'Create visually stunning and responsive websites that work seamlessly on all devices.',
          price: '$800 - $1500',
        },
        {
          title: 'Backend Development',
          description: 'Develop robust and scalable server-side logic, APIs, and databases for your applications.',
          price: '$1200 - $2500',
        },
        {
          title: 'E-commerce Integration',
          description: 'Integrate secure payment gateways and e-commerce functionality into your online store.',
          price: '$1000 - $2000',
        },
        {
          title: 'Maintenance and Support',
          description: 'Provide ongoing maintenance, updates, and technical support for your projects.',
          price: '$30/hour',
        },
      ];
  return (
    <Container id='services' isDarkMode ={isDarkMode}>
        <Nav  isDarkMode={isDarkMode} /> 
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Header isDarkMode ={isDarkMode}>Services</Header>
        </Animate>


 
       
        <div>
      {services.map((service, index) => (
        <ServicesContainer key={index}>
          <div>
          <Animate play start={{transform:'scale(0) translateY(300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
          <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </Animate>

          </div>
          <Animate play start={{transform:'scale(0) translateY(300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
          <ServicePrice>{service.price}</ServicePrice>
          </Animate>

        </ServicesContainer>
      ))}
    </div>
  

    </Container>
  )
}

export default ServicesList
