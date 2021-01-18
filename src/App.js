import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';
import Projects from './Components/Projects'


function App() {
  
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col class="col-8" md={3} md={6}>
                <p class="text-left">Soroosh Golbabae</p>
              </Col>
              {/* <Col xs={4} md={3}>
              <Image src={Pixelphoto} roundedCircle />
              </Col> */}
            </Row>
          </Container>
        </header>
        
        
          <hr style={{ color: 'white', backgroundColor: 'white', height: '2px'}}/>
        
        <Projects />
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