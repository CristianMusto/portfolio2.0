import styleClass from "./KnowledgeCard.module.scss";
import { useState, useMemo } from "react";

const KnowledgeCard = (props) => {
    const style = {background: `${props.shadow}`} 
    return (
        <div className={`${styleClass.oneDiv} ${props.className}`} style={style} onClick={props.onClick} id={props.id}>
            <img src={props.src} alt="profile" className={styleClass.image} loading="eager"/>
        </div>
    )
}

export default KnowledgeCard