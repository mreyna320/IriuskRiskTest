import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Layout from ".";

test('[LAYOUT]', () => {
    render(
        <BrowserRouter>
            <Layout>
                <div>Testing dummy text</div>
            </Layout>
        </BrowserRouter>
    );

    const footer = screen.getByText("Copyright FLDMFR - Iriusk Exam - v1.00");
    expect(footer).toBeInTheDocument();

    const children = screen.getByText("Testing dummy text");
    expect(children).toBeInTheDocument();

    const mainTitle = screen.getByText("Imperial destroyers center");
    expect(mainTitle).toBeInTheDocument();

    const navMenu = screen.getByTestId("nav-menu");
    expect(navMenu).toBeInTheDocument();
    expect(navMenu.children.length).toBe(3);

});