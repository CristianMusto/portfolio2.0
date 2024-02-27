import { memo } from "react";
import "./CertificatesCard.scss";
import LazyLoad from "react-lazyload";

const CertificatesCard = memo((props) => {
    const style = {backgroundImage: `url("${props.image}")`}
    return (
        <LazyLoad once className={`${props.className} cardCertificate`} id={props.id} style={style}>
            {props.title !== 'Coming Soon' ?
                <div className="overlay">
                    <p className="heading">{props.title !== 'Coming Soon' ? props.title : ''}</p>
                    <p className="para">{props.desc}
                    </p>
                    <a className="card-btn" href={props.src !== "" ? `${props.src}` : "undefined"} target="_blank" rel="noreferrer">Certificate</a>
                </div>
            : ''}
        </LazyLoad>
    )
})

export default CertificatesCard