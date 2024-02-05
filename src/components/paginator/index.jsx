import { PAGE_LIMIT } from "../../hooks/paginated-resource";
import "./paginator.scss"

const Paginator = ({ current, total_records, total_pages, itemType, nextPage, prevPage }) => {

    const from = ((current - 1) * PAGE_LIMIT) + 1;
    const to = PAGE_LIMIT * current;


    return (
        <div className="Paginator">
            <button data-testid="paginator-back-button" disabled={current === 1} onClick={prevPage}> &#11164;</button>
            <div data-testid="paginator-description">{`${from} to ${to} from ${total_records} ${itemType}`}</div>
            <button data-testid="paginator-next-button" disabled={current === total_pages} onClick={nextPage}>&#11166;</button>
        </div>
    )

}

export default Paginator;


