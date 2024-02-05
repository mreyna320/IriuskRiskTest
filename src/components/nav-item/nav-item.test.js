import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavItem from ".";


test('[NavItem]', () => {

    const name = "testingname";
    const route = "/testroute";

    render(<BrowserRouter><NavItem name={name} route={route} /></BrowserRouter>);

    const navlink = screen.getByText(name);
    expect(navlink).toBeInTheDocument();
    expect(navlink.closest("a")).toHaveAttribute("href", route);
});