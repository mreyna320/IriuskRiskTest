import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import Paginator from "../../components/paginator";
import { usePaginatedResource } from "../../hooks/paginated-resource";
import "./starships.scss";
import SortButton from "../../components/sort-button";
import { useMemo, useState } from "react";
import { objSortComparer } from "../../utils/obj-sort-comparer";

const ITEM_TYPE = "starships";

const StarshipsPage = () => {

    const pageHandler = usePaginatedResource(ITEM_TYPE);
    const [sort, setSort] = useState({ by: null, direction: null });

    const tableRows = useMemo(() => {
        if (!pageHandler.data) {
            return
        }

        let data = pageHandler.data.results;
        if (sort.by && sort.direction) {
            data = data.sort((a, b) => objSortComparer(a, b, sort.direction, sort.by));
        }


        return data.map(x => (
            <tr key={x.uid}>
                <td className="idColumn" >{x.uid}</td>
                <td className="nameColumn">{x.name}</td>
                <td className="actionColumn">
                    <Link to={`${ITEM_TYPE}/${x.id}`}>More</Link>
                </td>
            </tr>)
        )
    }, [sort, pageHandler.data])

    return (
        <div className="Starships">
            <Loader show={pageHandler.loading} />
            <h2>Starships</h2>
            <div className="Starships__content">
                <table cellSpacing={10}>
                    <thead>
                        <tr>
                            <th className="idColumn">id</th>
                            <th className="nameColumn">
                                name <SortButton direction={sort.by === "name" ? sort.direction : null} onSort={(direction) => setSort({ by: "name", direction })} />
                            </th>
                            <th className="actionColumn"></th>
                        </tr>

                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>

                </table>
                <Paginator
                    current={pageHandler.page}
                    nextPage={pageHandler.nextPage}
                    prevPage={pageHandler.previousPage}
                    total_records={pageHandler.data?.total_records}
                    total_pages={pageHandler.data?.total_pages}
                    itemType={ITEM_TYPE}
                />
            </div>
        </div >
    )
}

export default StarshipsPage;