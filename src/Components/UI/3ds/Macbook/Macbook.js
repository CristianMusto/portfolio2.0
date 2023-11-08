import styleclass from './Macbook.scss'
import Spline from '@splinetool/react-spline';

const Macbook = (props) => {
    return (
        <div className={`${styleclass.macbook} ${props.className}`}>
            <Spline scene="https://prod.spline.design/UrDpRo98L2cffCd2/scene.splinecode" />
        </div>
    )
}

export default Macbook