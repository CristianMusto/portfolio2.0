import styleClass from "./KnowledgeCard.module.scss";
import { useState, useMemo } from "react";

const KnowledgeCard = (props) => {
    const [delay, setDelay] = useState();
    const style = {animationDelay: `${delay}s`, boxShadow: `0 0 20px 10px ${props.shadow}`, background: `${props.shadow}`}
    useMemo(()=>{
        setDelay(Math.random() * 2)
    }, [])
    return (
        <div className={`${styleClass.oneDiv} ${props.className}`} style={style} onClick={props.onClick} id={props.id}>
            <img src={props.src} alt="profile" className={styleClass.image}/>
        </div>
    )
}

export default KnowledgeCard