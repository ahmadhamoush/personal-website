import React, { useState } from 'react'
import styled from 'styled-components'
import { tablet, mobile } from '../devices'
import { css } from 'styled-components'
import Typewriter from 'typewriter-effect';

const Container = styled.div `
position:relative ;
margin:20px;
width:500px;
min-height: 350px ;
height:auto;
border-radius: 20px;
background-color: white ;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
${tablet(css`
width:350px;
   `)};

 ${mobile(css`
width:330px;
   `)};

`
const ToolBar = styled.div`
position: absolute;
top:0;
border-top-left-radius: 20px ;
border-top-right-radius: 20px ;
width: 100%;
background: linear-gradient(to bottom, #d1d1d1 0%, #eee 100%);
filter:contrast(80%);
&::after{
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}`

const Circles = styled.div`
position:relative ;
display:flex ;
align-items:center ;
padding:5px;
`
const Circle = styled.div`
width:10px;
height:10px;
margin: 0 5px;
border-radius:50% ;
background-color: ${props=>props.color};

`
const Text = styled.span`
font-size:12px;
position:relative;
margin:auto ;
font-weight:bold ;
`
const Bar = styled.div`
position:absolute;
top:50px;
right:0;
width:8px;
height:25px;
background-color:#75BEC8;
border-radius:10px ;
`
const TerminalContent = styled.div`
position:relative ;
padding-top:30px;
padding-bottom: 10px ;
color:#75BEC8;
font-weight:bold ;
font-size:15px;
text-align:left ;
margin:5px;
font-size: 12px ;
`
const Button = styled.button`
background:white;
outline:none;
border:none;
color:#75BEC8;
cursor:pointer;
margin:10px;
padding:10px;
font-weight:bold;
border:1px solid #75BEC8;
transition: .5s ease-in-out;
-webkit-transition : .5s ease-in-out;
border-radius:5px;

&:hover{
background:#75BEC8;
color:white;
}
`
const Terminal = () => {
const [hacking,setHacking] = useState(true)
const [data,setData] =useState({info:false,skills:false,projects:false})
  return (
    <Container>
        <ToolBar>
            <Circles>
                <Circle color={'red'}/>
                <Circle color={'yellow'}/>
                <Circle color={'green'}/>
                <Text className='msg'>Terminal - login - 80x24</Text>
            </Circles>
        </ToolBar>
        <Bar />
      <TerminalContent>
{!data.info && !data.projects && !data.skills &&   <Typewriter
  onInit={(typewriter) => {
        typewriter.changeDelay(1)
        .typeString(`FORCE: XX0022. ENCYPT://000.222.2345  <br/>`)
        .typeString(`TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1 <br/>`)
        .typeString(`RETRY: REINDEER FLOTILLA <br/>`)
        .typeString(`Z:> /HAMOUSH/DOCUMENTS/DATA/ EXECUTE -DEV 0' <br/>`)
        .typeString(`============================================' <br/>`)
        .typeString(`Priority 1 // local / scanning... <br/>`)
        .typeString(`scanning ports...  <br/>`)
        .typeString(`BACKDOOR FOUND (13.66.23.12.00110044) <br/>`)
  
        .typeString(`BRUTE.EXE -r -z <br/>`)
        .typeString(`...locating vulnerabilities...' <br/>`)
        .typeString(`...vulnerabilities found... <br/>`)
        .typeString(`MCP/> DEPLOY CLU <br/>`)
        .typeString(`SCAN: __ 0012.0000.0553.0030 <br/>`)
        .typeString(`FOUND DATA: 1) PERSONAL INFO <br/>`)
        .typeString(`FOUND DATA: 2) SKILLS <br/>`)
        .typeString(`FOUND DATA: 3) PROJECTS <br/>`)
        .typeString(`CHOOSE DATA TO ACCESS:`)
        .pause()
      .callFunction(() => {
       setHacking(false)
      })
      .start()
  } }
  
/>}
{data.info  &&   <Typewriter
  onInit={(typewriter) => {
        typewriter.changeDelay(1)
        .typeString(`NAME: <br/>`)
        .typeString(`Ahmad Hamoush <br/><br/>`)
        .typeString(`NUMBER: <br/>`)
        .typeString(`+96178871728 <br/><br/>`)
        .typeString(`EMAIL:<br/>`)
        .typeString(`hamoush@outlook.comm<br/>`)
        .pause()
      .callFunction(() => {
       setHacking(false)
      })
      .start()
  } }
  
/>}
{data.skills  &&   <Typewriter
  onInit={(typewriter) => {
        typewriter.changeDelay(1)
        .typeString(`PROGRAMMING: <br/>`)
        .typeString(`Javascript <br/>`)
        .typeString(`Typescript <br/>`)
        .typeString(`Java <br/>`)
        .typeString(`Python <br/><br/>`)
        .typeString(`FRONTEND: <br/>`)
        .typeString(`React <br/>`)
        .typeString(`HTML5 <br/>`)
        .typeString(`CSS3 <br/>`)
        .typeString(`Angular <br/>`)
        .typeString(`Bootstrap <br/><br/>`)
        .typeString(`BACKEND: <br/>`)
        .typeString(`MongoDB <br/>`)
        .typeString(`Node JS <br/>`)
        .typeString(`MySQL <br/>`)
        .pause()
      .callFunction(() => {
       setHacking(false)
      })
      .start()
  } }
  
/>}

{!hacking && <div>
    <Button onClick={()=>setData({info:true,skills:false,projects:false})}>Personal Info</Button>
    <Button onClick={()=>setData({info:false,skills:true,projects:false})}>Skills</Button>
    <Button onClick={()=>setData({info:false,skills:false,projects:true})}>Projects</Button>
    </div>}

      </TerminalContent>
                    
        </Container>
  )
}

export default Terminal