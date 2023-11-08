import { memo, useEffect, useState, useRef } from "react";
import styleClass from "./Loader.module.scss";
import Macbook from "../3ds/Macbook/Macbook";

const Loader = memo(() => {
    const [isLoading, setIsLoading] = useState(true);
    let interval = useRef(null)
    useEffect(() => {
        if (isLoading) {
            interval.current = setInterval(() => {
                setIsLoading(false)
            }, 10000)
        }
        return () => {
            clearInterval(interval.current)
        }
    }, [isLoading])

    console.log(isLoading)
    return (
        <div className={`${styleClass.container} ${isLoading ? styleClass.loading : styleClass.loaded}`}>
            <Macbook className={styleClass.mac}>
                <div className={styleClass.overlay}>
                    <span className={styleClass.loader}>
                        <span className={styleClass.loader__rocket}>
                        <svg width="164" height="164">
                            <circle className={styleClass.loader__circle} cx="78" cy="82" r="77" transform="rotate(-90, 80, 80)" />
                        </svg>
                        <i className={styleClass.loader__icon}>
                            <svg className={styleClass.loader__svg}>
                            <polygon points="21 26.24 15.15 21.04 15.15 6.22 10.51 0 5.86 6.22 5.86 17.46 5.85 21.04 0 26.24 0 36 5.86 30.79 5.86 32.39 10.51 32.39 15.15 32.39 15.15 30.8 21 36 21 26.24"/>
                            </svg>
                        </i>
                        </span>
                    </span>
                </div>
            </Macbook>
        </div>
    )
})

export default Loader