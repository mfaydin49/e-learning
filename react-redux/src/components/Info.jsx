import {useLocation, useNavigate, useNavigation} from "react-router-dom";

const Info = () => {
    let location = useLocation();

    return (
        <div className="info">
            <div className="info-container">
                <div
                    className="info-navigation">{location.pathname === "/" ? "Home Page > e-Learning Courses" : `Home Page > e-Learning Courses ${location.pathname}`}</div>
                <div className="info-user">
                    <span>admin</span>
                </div>
            </div>
        </div>
    )
}

export default Info;