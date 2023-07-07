import {render, screen} from "@testing-library/react";
import {MemoryRouter, Routes, Route} from "react-router-dom";
import App from "./App";

describe("App Routes", () => {
    it("renders NotFound component for undefined routes", () => {
        render(
            <MemoryRouter initialEntries={["/unknown"]}>
                <App/>
            </MemoryRouter>
        );

        const notFoundElement = screen.getByText("404 - Not Found!");
        expect(notFoundElement).toBeInTheDocument();
    });
});