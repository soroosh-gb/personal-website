import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col} from 'react-bootstrap';



function Footer(){
    return (
        <div>
            <Container>
            <Col>
                <p class="text-centre">Let's Get In Touch!</p>
                </Col>
                <Row>
                    <Col>
                    <a href="https://github.com/soroosh-gb" target="_blank"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                    </Col>
                    <Col>
                    <a href="https://www.linkedin.com/in/soroosh-golbabae-b9b557113/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>    
                    </Col>
                    <Col>
                    <a href="https://soroosh-golbabae.medium.com/" target="_blank"><FontAwesomeIcon icon={faMedium} size="4x" /></a>      
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;