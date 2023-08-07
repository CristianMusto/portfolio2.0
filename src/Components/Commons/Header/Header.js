import styleClass from "./Header.module.scss";
import LinkComponent from "../../UI/Links/Links";
//import { useState, useEffect } from "react";

const Header = props => {
    // const getWindowSize = () => {
    //     const { innerWidth, innerHeight } = window;
    //     return { innerWidth, innerHeight };
    // };

    // const [isMobile, setIsMobile] = useState();
    // //const [isOpen, setIsOpen] = useState();

    // const [windowSize, setWindowSize] = useState(getWindowSize());

    // // const menuOpen = () => {
    // //     if (isOpen) {
    // //         setIsOpen(false);
    // //     } else {
    // //         setIsOpen(true);
    // //     }
    // // };

    // // const closeMenu = () => {
    // //     setIsOpen(false);
    // // };

    // useEffect(() => {
    //     function handleWindowResize() {
    //         setWindowSize(getWindowSize());
    //     }

    //     window.addEventListener("resize", handleWindowResize);
        
    //     if (windowSize.innerWidth <= 768) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }

    //     return () => {
    //         window.removeEventListener("resize", handleWindowResize);
    //     };
    // }, [windowSize]);
    return (
        <div className={styleClass.header}>
            <div
            className={`${styleClass.headerMenu} headerMenu`}
            >
                <ul className={`${styleClass.listMenu} listMenu`}>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <LinkComponent
                        to="About"
                        offset={-100}
                        text="About"
                        activeClass={styleClass.active}
                        />
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <LinkComponent
                        to="Certificates"
                        offset={-100}
                        text="Certificates"
                        activeClass={styleClass.active}
                        />
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <LinkComponent
                        to="Cover"
                        offset={-100}
                        text="CM"
                        activeClass={styleClass.active}
                        />
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <LinkComponent
                        to="Knowledge"
                        offset={-100}
                        text="Knowledge"
                        activeClass={styleClass.active}
                        />
                    </li>
                    <li className={`${styleClass.menuItem} menuItem`}>
                        <LinkComponent
                        to="Projects"
                        offset={-100}
                        text="Projects"
                        activeClass={styleClass.active}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header