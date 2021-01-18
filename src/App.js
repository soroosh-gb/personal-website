import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';
import Projects from './Components/Projects'
import Typing from 'react-typing-animation';
import Footer from './Components/Footer'
import BinaryPhoto from './BinaryPhoto.png'

function App() {
  
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col class="col-8" md={3} md={6}> 
                <Typing speed={50}>
                <p class="text-centre"> Hi, I am Soroosh Golbabae </p>
                <Typing.Delay ms={500}/>
                  <p>I'm a full stack developer, experienced in Ruby on Rails and JavaScript with a background in sound engineering, music production and live performance.</p>
                </Typing>
                
              </Col>
              <Col>
              <Image className="photo" src={BinaryPhoto} thumbnail />
              </Col>
            </Row>
          </Container>
        </header>
  
        <hr style={{ color: 'white', backgroundColor: 'white', height: '2px'}}/> 
        <Projects />

        <hr style={{ color: 'white', backgroundColor: 'white', height: '2px'}}/>
        <Footer />
      </div>
    )
      
}


export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }