import React from 'react'
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
import img9 from '../images/img9.jpg'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate'
// const images = [img7,img8,img9,img3,img1,img2,img4,img5,img6]

const Container = styled.div `
position:relative;
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
display:flex;
flex-direction:column ;
text-align: center ;
padding:20px;
min-height:100vh;
`
const Cards = styled.div`
display: flex ;
overflow-x:scroll;
flex-direction:row;
flex-wrap:wrap;
width:100%;
justify-content:center;
overflow-y:hidden;
align-items: center ;

`

const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const Projects = ({isDarkMode}) => {

  return (
    <Container id='projects' isDarkMode ={isDarkMode}>
        <Nav  isDarkMode={isDarkMode} /> 
        <Animate play start={{transform:'scale(0) translateY(-300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Header isDarkMode ={isDarkMode}>Projects</Header>
        </Animate>

        <Animate play start={{transform:'scale(0) translateY(300px)',opacity:'0'}} end={{transform:'scale(1) translateY(0)',opacity:'1'}}>
        <Cards>
     
     <Link to='https://yogawitholynda.com'>
     <Card image={img7}/>
     </Link>
     <Link to='https://hireleb.vercel.app'>
     <Card image={img8}/>
     </Link>
     <Link to='https://gifco.vercel.app'>
     <Card image={img9}/>
     </Link>

     <Link to='https://outlinebeirut.vercel.app'>
<Card image={img3}/>
</Link>
 <Link>
 <Card image={img1}/></Link>
    <Link>
    <Card image={img2}/></Link>






    <Link>
    <Card image={img4}/></Link>


    <Link>
    <Card image={img5}/></Link>

  <Link to='https://patibon.com'>
  <Card image={img6}/>
  </Link>
  
  </Cards>

        </Animate>
       
       
    
  

    </Container>
  )
}

export default Projects
