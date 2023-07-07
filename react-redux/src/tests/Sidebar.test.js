import {screen} from "@testing-library/react";
import Sidebar from "../components/Sidebar.jsx";
import {renderWithProviders} from "../utils/test-utils.js";

describe("Sidebar Component", () => {
    it("should render Sidebar component", async () => {
        renderWithProviders(<Sidebar/>)
        const linkElement = await screen.findByText(/Money Laundering/i);
        expect(linkElement).toBeInTheDocument();
    });
});