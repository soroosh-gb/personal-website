import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import projects from '../data'

function ProjectCard(data) {
    return(
        <>
        
        
        <Card className="h-100 shadow-sm bg-white rounded" />
        <Card.Img variant="top" src={data.image} />
       
        </>
    )
}

export default ProjectCard