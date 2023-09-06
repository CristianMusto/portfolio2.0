import styleClass from "./Certificates.module.scss";
import { Element } from 'react-scroll';
import CertificatesCard from "../../UI/CertificatesCard/CertificatesCard";
const Certificates = () => {
    return (
        <Element className={styleClass.CertificatesContainer} name="Certificates">
            <CertificatesCard />
        </Element>
    )
} 

export default Certificates