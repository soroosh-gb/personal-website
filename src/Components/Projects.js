import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import projects from '../data'
import ProjectCard  from './ProjectCard'


function Projects(){
    // console.log(projects)
    return (
        <div style={{ backgroundColor: 'black'}}>
            <Container>
            <Row>
                <Col>
                <p class="text-centre">Projects</p>
                </Col>
            </Row>
            <Row>
                {projects.map(data => (
                    <Col xs={3} className="mb-5" key={`${data.id}`}>
                        <ProjectCard data={data}/>
                </Col>
                ))}
            </Row>
            </Container>
            
            
        </div>
    )
}

export default Projects