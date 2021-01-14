import React from 'react';
import './Projects.css'
import WDM from './WDM.png'
import SampleCache from './SampleCache.png'
import Playlist from './Playlist.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'


class Projects extends React.Component {

    clickHandler = () => {

    }
    render(){
        return  <>
                    <div className="Project-card">
                         <h1>Sample Cache</h1>
                         <img src={SampleCache}/>
                         <a href="https://github.com/soroosh-gb/sample-cache-frontend/tree/soroosh-first"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                         <a href="https://youtu.be/KuI0VSqFgLU" className="Btn"><FontAwesomeIcon icon={faYoutube} size="4x" /></a>

                         
                    </div>
                    <div className="Project-card">
                        <h1>Web Drum mAchine</h1>
                        <img src={WDM}/>
                        <a href="https://github.com/soroosh-gb/wdm-front-end/tree/soroosh-golbabae"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                        <a href="https://youtu.be/gob40NAEFI0" className="Btn"><FontAwesomeIcon icon={faYoutube} size="4x" /></a>

                    </div>
                    <div className="Project-card">
                        <h1>Playlist</h1>
                        <img src={Playlist}/>
                        <a href="https://github.com/soroosh-gb/playlist-front-end"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                        <a href="https://youtu.be/4ijTMj9LQdI" className="Btn"><FontAwesomeIcon icon={faYoutube} size="4x" /></a>
                    </div>
                </>
    }
}

export default Projects;
