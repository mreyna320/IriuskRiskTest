import Card from "../../components/card";
import Loader from "../../components/loader";
import Paginator from "../../components/paginator";
import { usePaginatedResource } from "../../hooks/paginated-resource";
import "./home.scss";

const ITEM_TYPE = "planets";

const HomePage = () => {

    const pageHandler = usePaginatedResource(ITEM_TYPE);

    return (
        <div className="Home">
            <Loader show={pageHandler.loading} />
            <h1>Planets</h1>
            <div className="Home__content">
                {pageHandler.data && pageHandler.data.results.map(x => <Card
                    key={x.uid}
                    itemType={ITEM_TYPE}
                    id={x.uid}
                    name={x.name}
                />)
                }
            </div>

            <Paginator
                current={pageHandler.page}
                nextPage={pageHandler.nextPage}
                prevPage={pageHandler.previousPage}
                total_records={pageHandler.data?.total_records}
                total_pages={pageHandler.data?.total_pages}
                itemType={ITEM_TYPE}
            />

        </div>
    )
}

export default HomePage;