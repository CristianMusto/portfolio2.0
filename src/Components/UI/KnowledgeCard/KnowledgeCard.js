import styleClass from "./KnowledgeCard.module.scss";
import { useState, useEffect } from "react";


const KnowledgeCard = (props) => {
    const [delay, setDelay] = useState();
    useEffect(()=>{
        setDelay(Math.random() * 2)
    }, [])
    return (
        <div className={`${styleClass.oneDiv} ${props.className}`} style={{animationDelay: `${delay}s`}} onClick={props.onClick} id={props.id}>
            <img src={props.src} alt="profile" className={styleClass.image}/>
        </div>
    )
}

export default KnowledgeCard