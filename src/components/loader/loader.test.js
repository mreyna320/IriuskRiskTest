import { render, screen } from "@testing-library/react";

import Loader from ".";

describe('[LOADER]', () => {

    it("Should render when show true", () => {
        render(<Loader show={true}></Loader>);

        const loaderShadow = screen.getByTestId("loader-shadow");
        const loaderCharger = screen.getByTestId("loader-charger");
        expect(loaderShadow).toBeInTheDocument();
        expect(loaderCharger).toBeInTheDocument();
    })

    it("Should not render when show false", () => {
        render(<Loader show={false}></Loader>);

        const loaderShadow = screen.queryByTestId("loader-shadow");
        const loaderCharger = screen.queryByTestId("loader-charger");
        expect(loaderShadow).not.toBeInTheDocument();
        expect(loaderCharger).not.toBeInTheDocument();
    })

});