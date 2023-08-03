import './Projects.css'
import { useState,useEffect } from 'react'
import { websites } from './project_data/websites'
import { games } from './project_data/games'
import { etc } from './project_data/etc'

const Projects = ()=>{
    const [display, setDisplay] = useState()
    
    let websiteDisplay = <div className="box-display">
        {websites.map((item,index)=>{
            return(
                <div className="card-project" key={item.id}>
                  {item.name}
                </div>
            )
        })}
    </div>

    let gamesDisplay = <div className="box-display" >
        {games.map((item,index)=>{
            return(
                <div className="card-project" key={item.id}>
                  {item.name}
                </div>
            )
        })}
    </div>

    let etcDisplay = <div className="box-display" >
        {etc.map((item,index)=>{
            return(
                <div className="card-project" key={item.id}>
                {item.name}
                </div>
            )
        })}
    </div>


    const websitesHandler = ()=>{
        setDisplay(websiteDisplay)
    }

    const gamesHandler = ()=>{
        setDisplay(gamesDisplay)
    }
    
    const etcHandler = ()=>{
        setDisplay(etcDisplay)
    }

    useEffect(()=>{
        setDisplay((websiteDisplay))
    },[])

    return(
        <div className="projects-container" id="projects">
            <div className="title-projects">
                <h1>{"<"} Projects {">"}</h1>
            </div>
            <div className="projects-menu">
                <ul>
                    <li><button onClick={websitesHandler}>Websites</button></li>
                    <li><button onClick={gamesHandler}>Games</button></li>
                    <li><button onClick={etcHandler}>Etc.</button></li>
                </ul>
            </div>
            <div className="box-showing">
                {display}
            </div>
        </div>
    )
}

export default Projects;