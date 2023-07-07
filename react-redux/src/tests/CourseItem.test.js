import { render } from "@testing-library/react";
import CourseItem from "../components/CourseItem.jsx";

describe('Course Item Component', () => {
    it('displays \'Coming Soon\' text when course.courses is empty', () => {
        const mockCourse = {
            courses: []
        };

        const { getByText } = render(<CourseItem course={mockCourse} />);

        const comingSoonText = getByText("Coming Soon...");
        expect(comingSoonText).toBeInTheDocument();
    });
});