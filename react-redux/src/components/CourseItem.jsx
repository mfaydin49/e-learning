const CourseItem = ({course}) => {
    return (
        <div className="courses-wrapper">
            <div className="course-detail">
                {course.courses.map((course, key) => {
                    return (
                        <div className={'course-inner-wrapper'} key={key}>
                            <div className="course-title">{course.title}</div>
                            <div className="course-process">
                                <div className="course-process-wrapper">
                                    <div>{course.min}</div>
                                    <div className="dots">
                                        <div className="dot yellow"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                </div>
                                <div>To be done by : {course.finishedDate}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CourseItem;