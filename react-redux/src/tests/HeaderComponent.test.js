import { render, screen } from "@testing-library/react";
import HeaderComponent from "../components/HeaderComponent.jsx";

describe('Header Component', () => {
    it('displays logo image', () => {
        render(<HeaderComponent />);

        const logoImage = screen.getByAltText("Logo");
        expect(logoImage).toBeInTheDocument();
    });
});