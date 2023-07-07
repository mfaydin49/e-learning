import CourseList from "./CourseList";
import {renderWithProviders} from "../utils/test-utils.js";

describe('Course List Component', () => {
    it('renders at least one course', () => {
        renderWithProviders(<CourseList/>);
        const coursesContainerElements = document.querySelectorAll(".courses-container");
        expect(coursesContainerElements.length).not.toBe(0)
    });
});