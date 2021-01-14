import React from 'react';
import './Projects.css'
import WDM from './WDM.png'


class Projects extends React.Component {
    render(){
        return  <>
                    <div className="Project-card">
                         <h1>Sample Cache</h1>
                         
                    </div>
                    <div className="Project-card">
                        <h1>Web Drum mAchine</h1>
                        <img src={WDM}/>
                    </div>
                    <div className="Project-card">
                        <h1>Playlist</h1>
                    </div>
                </>
    }
}

export default Projects;
