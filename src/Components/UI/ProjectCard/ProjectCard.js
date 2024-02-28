import { memo } from "react";
import "./ProjectCard.scss";

const ProjectCard = memo((props) => {
    const style = {color: `${props.shadow}`, backgroundImage: `url('${props.image}')`}
    return (
        <div className="cardProject" style={style}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.credits}</span>
            <a className="link" href={props.src !== "" ? `${props.src}` : "undefined"} target="_blank" rel="noreferrer">Go to see!</a>
        </div>
    )
})

export default ProjectCard