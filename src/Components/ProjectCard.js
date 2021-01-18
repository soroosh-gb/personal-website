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
        
        <Card className="h-100 shadow-sm project-card rounded" >
            <Card.Title>{data.data.name}</Card.Title>
            <Card.Img className="card-image" variant="top" src={data.data.image} />
            <Card.Body>
            <a href={data.data.github} className="a-black" target="_blank"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
            <a href={data.data.video} className="a-red" target="_blank" ><FontAwesomeIcon icon={faYoutube} size="4x" /></a>
            </Card.Body>
        </Card>
       
        
    )
}

export default ProjectCard