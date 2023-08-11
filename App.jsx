import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div class="topnav">
        <a href="/home" class="bold">Alison Bai</a>
        <a href="/github">Projects</a>
        <a href="/contact">Resume</a>
        <a href="/about" class="split">Contact</a>
      </div>
      <hr/>
    
      
      <div className="container">

        <div className="column1">
        
          <div class="circle-container">
            <img src="https://media.licdn.com/dms/image/D5603AQEa8oY5xu6qBA/profile-displayphoto-shrink_400_400/0/1691600499181?e=1697068800&v=beta&t=PKfE_3p3zy7vyWy28Ohl0Z2ERx2fDEj3cpHTQoS3yAM" alt="Your Image" class="circle-image"/>
          </div>
          <h2> Alison Bai</h2>
          <b>CS @ Northwestern University</b>
          
          
          <div className="description">
            <div className="description-block">
              <b><img src="https://icon2.cleanpng.com/20180602/fgl/kisspng-computer-icons-map-download-pin-location-5b12c56bdf5da7.3710107815279568439149.jpg" alt="Your Image" class="logo-small"/>Chicago, IL</b>
              <br></br>
              <br></br>
              <img src="https://w7.pngwing.com/pngs/364/654/png-transparent-computer-icons-linkedin-symbol-miscellaneous-angle-text-thumbnail.png" alt="LinkedIn_Logo" class="logo-small"/>
              <a href='https://www.linkedin.com/in/alison-bai-8b07471b5/' class="link" target="LinkedIn">LinkedIn</a>
              <br></br>
              <img src="https://p7.hiclipart.com/preview/595/338/523/icon-email-clip-art-email-png.jpg" alt="Email_Logo" class="logo-small"/>
              <a href='mailto:alisonbai2026@u.northwestern.edu' class="link" target="_blank">Email</a>
              <br></br>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub_logo" class="logo-small"/>
              <a href='https://github.com/alizenart' class="link" target="_blank">GitHub</a>
            </div>
          </div>
          
          

        </div>
      
        <div className="column2">
          <div className = "left-text">
            <h3>About Me</h3>

            <c>I am a second-year student at <a href='https://www.northwestern.edu/' class="link-1" target="_blank">Northwestern University</a> and a student web developer for <a href='https://ccl.northwestern.edu/' class="link-1" target="_blank">The Center for Connected Learning and Computer-Based Modeling</a> (CCL) 
            . Currently, I am pursuing a Bachelor of Arts in Computer Science with a concentration in AI. I have experience working in cybersecurity as summer intern at <a href='https://omnisoc.iu.edu/' class="link-1" target="_blank">OmniSOC</a> at Indiana University, where I analyzed real-life High and Critical Alerts using the Mitre Att&ck approach. 
            </c>

            
            <br></br>
            <br></br>
            <c>At the moment, I am interested in exploring different fields in computers such as AI and Game Design. I would like to work on new, creative technologies or implementations that allow for creative experience or an increased proficiency in work </c>
            <br></br>
            <br></br>

            <h3>Relevant Coursework</h3>
            <c>CS 214: Data Structures and Algorithms </c>
            <a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/214.html' target="_blank"><img src="https://static-00.iconduck.com/assets.00/external-link-icon-2048x2048-wo7lfgrz.png" alt="Email_Logo" class="logo-small"/></a>
            <br></br>  
            <c>CS 211: Fundamentals of Computer Programming II </c>
            <a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/211.html' target="_blank"><img src="https://static-00.iconduck.com/assets.00/external-link-icon-2048x2048-wo7lfgrz.png" alt="Email_Logo" class="logo-small"/></a>
           
            <br></br>  
            <br></br>  
            <div class="c bold">Incoming Courses (Fall 2023)</div>
            <c>CS 213: Intro to Computer Systems </c>
            <a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/213-20.html' target="_blank"><img src="https://static-00.iconduck.com/assets.00/external-link-icon-2048x2048-wo7lfgrz.png" alt="Email_Logo" class="logo-small"/></a>
            <br></br>  
            <c>CS 348: Intro to Artificial Intelligence </c>
            <a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/348.html' target="_blank"><img src="https://static-00.iconduck.com/assets.00/external-link-icon-2048x2048-wo7lfgrz.png" alt="Email_Logo" class="logo-small"/></a>
            <br></br>  
            <c>CS 376: Computer Game Design and Development </c>
            <a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/376.html' target="_blank"><img src="https://static-00.iconduck.com/assets.00/external-link-icon-2048x2048-wo7lfgrz.png" alt="Email_Logo" class="logo-small"/></a>
            <br></br>  
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default App
