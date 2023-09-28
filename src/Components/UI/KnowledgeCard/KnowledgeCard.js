import styleClass from "./KnowledgeCard.module.scss";

const KnowledgeCard = (props) => {
    return (
        <div className={`${styleClass.oneDiv} ${props.className}`}>
            <div className={styleClass.text}>Hello There </div>
        </div>
    )
}

export default KnowledgeCard