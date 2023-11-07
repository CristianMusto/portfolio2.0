import { memo } from "react";
import "./ProjectCard.scss";
import LazyLoad from "react-lazyload";

const ProjectCard = memo((props) => {
    const style = {border: `1px solid ${props.shadow}`,color: `${props.shadow}`, boxShadow: `0 0 10px 5px ${props.shadow}`, backgroundImage: `url('${props.image}')`}
    return (
        <LazyLoad once className="cardProject" style={style}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.credits}</span>
            <a className="link" href={props.src !== "" ? `${props.src}` : "undefined"} target="_blank" rel="noreferrer">Go to see!</a>
        </LazyLoad>
    )
})

export default ProjectCard