import "./ProjectCard.scss";

const ProjectCard = (props) => {
    return (
        <div class="cardProject" style={{border: `1px solid ${props.shadow}`,color: `${props.shadow}`, boxShadow: `0 0 10px 5px ${props.shadow}`}}>
            <p><span>HOVER ME</span></p>
        </div>
    )
}

export default ProjectCard