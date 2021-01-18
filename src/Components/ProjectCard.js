import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ProjectCard.css'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import projects from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'


function ProjectCard(data) {
    console.log(data.data.image)
    return(  
        
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Title>{data.data.name}</Card.Title>
            <Card.Img variant="top" src={data.data.image} />
            <Card.Body>
            <a href={data.data.github} target="_blank"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
            <a href={data.data.video} target="_blank" className="Btn"><FontAwesomeIcon icon={faYoutube} size="4x" /></a>
            </Card.Body>
        </Card>
       
        
    )
}

export default ProjectCard