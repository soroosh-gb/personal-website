import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import projects from '../data'
import WDM from '../assets/WDM.png'
import Playlist from '../assets/Playlist.png'
import SampleCache from '../assets/SampleCache.png'


function ProjectCard(data) {
    console.log(data.data.image)
    return(  
        
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Title>{data.data.name}</Card.Title>
            <Card.Img variant="top" src={data.data.image} />
            <Card.Body>
                <Button></Button>
                <Button></Button>
            </Card.Body>
        </Card>
       
        
    )
}

export default ProjectCard