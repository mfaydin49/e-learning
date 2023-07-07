import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Info from "./Info";

describe("Info Component", () => {
    it("displays correct navigation text based on location", () => {
        const mockLocation = { pathname: "/courses" };

        const { getByText } = render(
            <MemoryRouter initialEntries={[mockLocation]}>
                <Info />
            </MemoryRouter>
        );

        const navigationText = getByText("Home Page > e-Learning Courses > courses");
        expect(navigationText).toBeInTheDocument();
    });
});
