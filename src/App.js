import logo from './logo.png';
import couple from './coupleImg.png';
import calander from './calanderLogo.png';
import pin from './map-pin.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img1 from './img1.png';
import img2 from './img2.png';
import cardImg from './cardImg.png';
import ring from './ring.png';
import like from './like.jpg';
import glass from './glass.png';
import heart from './heart.png';
import heartCalander from './heart-calander.png';


import './App.css';

function App() {
  const preventDefault = (event) => event.preventDefault();
  const theme = createTheme({
    palette: {
     
      secondary: {
        
        main: "#7D8790"
      }
    }
  });


  return (
    
    <div className="App">
       
      <header className="App-header">
      <img src={logo} alt="chitra" className='logo'/>
  
        <h1 className='logo-name'>Datify</h1>
        <div className='right'>
        <ThemeProvider theme={theme} color="secondary">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2
          }
        }}
        onClick={preventDefault}
      >
        <Link href="#" underline="none" color="secondary" >
          <h3 className='link-name'>Home</h3>
        </Link>
        <Link href="#" underline="none" color="secondary">
          <h3 className='link-name'>Members</h3>
        </Link>
        <Link href="#" underline="none" color="secondary">
          <h3 className='link-name'>Blog</h3>
        </Link>
        <Link href="#" underline="none" color="secondary">
          <h3 className='link-name'>Privacy</h3>
        </Link>
        <Link href="#" underline="none" color="secondary">
          <h3 className='link-name'>Contact</h3>
        </Link>
        <Link href="#" underline="none" color="secondary">
          <h3 className='link-name' style={{ marginLeft: '60px'}}>Log In</h3>
        </Link>
      </Box>
    </ThemeProvider>
    </div>
    <button className='register-btn' >Register</button>
      </header>

<div className='main-content'>
      <h1 className='first-heading'>Because you deserve better!</h1>
     <div className='second-heading'> Get noticed for <span style={{color:"#ED9B59"}}>who </span> you are,
      <span style={{color:"#ED9B59"}}>not what</span><br></br> you look like.
      </div>
     <p className="para">You’re more than just a photo. You have stories to tell, and <br></br>
      passions to share,and things to talk about that are more<br></br> 
      interesting than the weather.Because you deserve what<br></br>
        dating deserves: better.</p>
       <form className='email-content'>
        
        <input type='email' placeholder="        ✉   Enter Your Email" className='email-inp'/>
        <button className='start-btn'>Get Started</button>
       
       </form>
      
       <div className='count-box'>
<div className='box-1'>
        <h1 className='number-counts'>15k+</h1>
        <p className='count-info' >Dates and matches made everyday</p>
        </div>

        <div className='box-2'>
        <h1  className='number-counts' style={{color:"#ED9B59"}}>1456</h1>
        <p className='count-info' >New members signup every day</p>
        </div>
</div>

<div className='box-3'>
        <h1  className='number-counts'  >1M+</h1>
        <p className='count-info' >Members from around the world</p>
       </div>
      </div>

<div className='profile-details' >
 
<img src={couple} alt="chitra" className="couple-img"/>
<div style={{marginTop: "-720px"}}>
 
  <div className='bubble1'><img src={ring} className="ring-img"/></div>
  <div className='bubble2'> ♡
    {/* <img src={like} className="like-img"/> */}
    </div>
  <div className='bubble3'> ♡
    {/* <img src={glass} className="glass-img"/> */}
    </div>
  <div className='bubble4'>♡</div>
  <div className='bubble5'><img src={heartCalander} className="calender-img"/></div>
</div>
  <div style={{marginLeft:"-700px",display:"flex"}}>
<div className='gender' style={{marginTop:"-180px"}}><span style={{color:"black"}}>♂ </span>Male</div>
  
<div className='age' style={{marginTop:"-180px"}}>
  <img src={calander} alt="chitra" className="calander-img" />
  30-35 Years
  </div>

<div className='place'style={{marginTop:"-180px"}} >
<img src={pin} alt="chitra" className="pin-img"/>
NewYork
</div>
</div>



</div>

<div className='cards'>


      
       <div className='card' >
        <img className='profile-img' alt="chitra" src={img1}/>
        <h1 className='profile-name'>Angela Taylor</h1>
        <h1 className='profile-city'>Cincinati, OH</h1>
        <button className='select-btn'>Select</button>

      </div>
      <div className='card' style={{marginLeft:"25px"}} >
      <img className='profile-img' alt="chitra" src={img2}/>
      <h1 className='profile-name'> Mike Johnson</h1>
      <h1 className='profile-city'> NY City, NY</h1>
      <button className='select-btn'>Select</button>

    </div>
   
    
 

</div>





<img src={cardImg} alt="chitra" className='atm'
//  style={{marginTop: "-200px"}}
 />


    </div>
  );
}

export default App;
