import styleClass from "./Projects.module.scss";
import { Element } from 'react-scroll';
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import { useState, useEffect } from "react";
const Projects = () => {
    const [ProjectContent, setProjectContent] = useState([]);
    const [baseUrl, setBaseUrl] = useState();
    useEffect(() => {
        setBaseUrl("https://cristianmusto.github.io/portfolio2.0/")
        const knowledgeFetch = async () => {
        const data = await (
            await fetch(
            "https://cristianmusto.github.io/portfolio2.0/json/cardsProjects.json"
            )
        ).json();
        setProjectContent(data);
        };
        knowledgeFetch();
    }, []);

    return (
        <Element className={styleClass.ProjectsContainer} name="Projects">
            <div className={styleClass.ProjectsContent}>
            {ProjectContent.length > 0 ? (
              ProjectContent.map((el) => (
                <ProjectCard key={el.id} src={`${el.link}`} id={el.id} title={el.title} desc={el.description} 
                shadow={el.shadow} image={`${baseUrl}${el.logo}`}/>
              ))
              ) : (
                <h3>Coming Soon...</h3>
            )}
            </div>
        </Element>
    )
} 

export default Projects