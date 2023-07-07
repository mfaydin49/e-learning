import SidebarContact from "./SidebarContact.jsx";
import {useSelector} from "react-redux";

const Sidebar = () => {
    const {courses} = useSelector((store) => store);

    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <p>Navigation</p>
            </div>
            <ul>
                {courses.data.map((course, key) => {
                    return (
                        <li key={key}>
                            <a href="/"><img src={course.img} alt={course.alt}/>
                                {course.title}</a>
                        </li>
                    )
                })}
            </ul>

            <div className="sidebar-title contact">
                <p>Contact</p>
            </div>
            <div className="sidebar-contact">
                <SidebarContact/>
            </div>
        </div>
    )
}

export default Sidebar;