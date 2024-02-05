import { render, screen } from "@testing-library/react";
import Paginator from ".";


test('[PAGINATOR]', () => {
    let prevvalue, nextValue;

    render(<Paginator current={1} total_records={60} total_pages={6} itemType="planets" nextPage={() => { nextValue = 1 }} prevPage={() => { prevvalue = 1 }} />);

    const paginatorDescription = screen.getByTestId("paginator-description");
    expect(paginatorDescription).toHaveTextContent("1 to 12 from 60 planets");

    const paginatorBackButton = screen.getByTestId("paginator-back-button");
    paginatorBackButton.click();
    expect(prevvalue).toBeUndefined();

    const paginatorNextButton = screen.getByTestId("paginator-next-button");
    paginatorNextButton.click();
    expect(nextValue).toBe(1);
});