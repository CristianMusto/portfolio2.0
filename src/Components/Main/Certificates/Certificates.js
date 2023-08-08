import styleClass from "./Certificates.module.scss";
import { Element } from 'react-scroll';

const Certificates = () => {
    return (
        <Element className={styleClass.CertificatesContainer} name="Certificates">
            <div className={styleClass.card}></div>
            <div className={styleClass.card}></div>
            <div className={styleClass.card}></div>
        </Element>
    )
} 

export default Certificates