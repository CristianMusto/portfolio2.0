import { memo } from 'react';
import styleclass from './Macbook.module.scss'
import Spline from '@splinetool/react-spline';

const Macbook = memo((props) => {
    return (
        <div className={`${styleclass.macbook} ${props.className}`}>
            <Spline scene="https://prod.spline.design/UrDpRo98L2cffCd2/scene.splinecode" />
            {props.children}
        </div>
    )
})

export default Macbook