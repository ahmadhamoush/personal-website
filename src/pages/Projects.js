import React, { useState,useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import Card from '../components/Card'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'

const images = [img1,img2,img3,img4,img5,img6]

const Container = styled.div`
padding:40px;
background-color: ${props=>props.isDarkMode ? '#1E1E1E' : "white"};
`
const Cards = styled.div`
display: flex ;
flex-wrap:wrap ;
justify-content: center ;
align-items: center ;
`

const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const Projects = ({isDarkMode}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    if(window.innerWidth<768){
      setIsMobile(true)
      console.log(isMobile)
    }
    else if(window.innerWidth>768){
      setIsMobile(false)
      console.log(isMobile)

    }
  }, [isMobile])
  return (
    <Container isDarkMode ={isDarkMode}>
        <Header isDarkMode ={isDarkMode}>Projects</Header>

        <Carousel showThumbs={false} infiniteLoop>
        {isMobile && images.map((img)=>  
        (
         
          <Cards isMobile={isMobile}>
            <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img}/>
      </AnimationOnScroll>

            </Cards>
          
       )) 
        }
        </Carousel>
    
      {!isMobile && (
         <Carousel showThumbs={false} infiniteLoop>
        <Cards isMobile={isMobile}>
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img1}/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img2}/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img3}/>
      </AnimationOnScroll>
        </Cards>
        <Cards isMobile={isMobile}>
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img4}/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img5}/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img6}/>
      </AnimationOnScroll>
        </Cards>
        </Carousel >
    
        )}

        <br />
        <Header isDarkMode ={isDarkMode}>Upcoming Projects</Header>
        <Cards>
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img7}/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
            <Card image={img8}/>
      </AnimationOnScroll>
        </Cards>
    </Container>
  )
}

export default Projects
