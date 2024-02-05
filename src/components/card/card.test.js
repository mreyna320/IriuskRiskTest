import { render, screen } from '@testing-library/react';

import Card from '.';
import { BrowserRouter } from 'react-router-dom';

test('[CARD]', () => {
    render(
        <BrowserRouter>
            <Card itemType="planets" name="dummyPlanet" id="1" />
        </BrowserRouter>
    );
    
    const h2Element = screen.getByText(/dummyPlanet/i);
    expect(h2Element).toBeInTheDocument();

    const linkToDetail = screen.getByText("More info");
    expect(linkToDetail).toBeInTheDocument();
    expect(linkToDetail.closest('a')).toHaveAttribute('href', "/planets/1")

});