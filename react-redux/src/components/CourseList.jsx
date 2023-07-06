import CourseItem from "./CourseItem.jsx";
import {useSelector} from "react-redux";

const CourseList = () => {
    const {courses} = useSelector((store) => store);

    return (
        <>
            <h2>e-Learning Courses</h2>
            <section className="course-section">
                <div className="courses">
                    {courses.data.map((item, key) => {
                        return (
                            <div className="courses-container" key={key}>
                                <div><img src={item.img} alt={item.alt}/></div>
                                <CourseItem course={item} key={key}/>
                            </div>

                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}

export default CourseList;