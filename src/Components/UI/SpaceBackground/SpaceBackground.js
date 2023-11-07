import { memo } from "react";
import "./SpaceBackground.scss";
const SpaceBackground = memo(() => {
    return (
        <div className="spaceBackground">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
        </div>
    )
})

export default SpaceBackground