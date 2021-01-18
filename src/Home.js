import React from 'react';
import './Home.css'
import Projects from './Projects'


class Home extends React.Component {
    render(){
      return    <div className="Home">
                    <header className="Home-header"> 
                        <div className="Line-top"></div>
                        <p>Projects</p>
                            <Projects />
                        <div className="Line-bottom"></div>
                    </header>
                </div>
    }
  }
  
  
  export default Home;