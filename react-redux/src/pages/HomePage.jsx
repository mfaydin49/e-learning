import CourseList from "../components/CourseList.jsx";
import coursesData from '../data/coursesData.json'
import Sidebar from "../components/Sidebar.jsx";

const HomePage = () => {
    return (
        <div className="container">
            <Sidebar courses={coursesData}/>
            <CourseList/>
        </div>
    )
}

export default HomePage;