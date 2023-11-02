import "./ProjectCard.scss";

const ProjectCard = (props) => {
    return (
        <div class="cardProject" style={{border: `1px solid ${props.shadow}`,color: `${props.shadow}`, boxShadow: `0 0 10px 5px ${props.shadow}`, backgroundImage: `url('${props.image}')`}}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.credits}</span>
            <a className="link" href={props.src !== "" ? `${props.src}` : "undefined"} target="_blank" rel="noreferrer">Go to see!</a>
        </div>
    )
}

export default ProjectCard