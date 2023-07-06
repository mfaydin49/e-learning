import CourseList from "../components/CourseList.jsx";
import coursesData from '../data/coursesData.json'
import SideBar from "../components/SideBar.jsx";

const HomePage = () => {
    return (
        <div className="container">
            <SideBar courses={coursesData}/>
            <CourseList/>
        </div>
    )
}

export default HomePage;