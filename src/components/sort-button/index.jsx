import "./sort-button.scss";
/**
 * 
 * @param direction direction can be "ASC", "DES", null
 * @param onClick receives sort direction;
 */
const SortButton = ({ direction, onSort }) => {

    switch (direction) {
        case "ASC": {
            return <span className="SortButton" onClick={() => onSort("DES")}>&#11105;</span>
        }
        case "DES": {
            return <span className="SortButton" onClick={() => onSort()}>&#11107;</span>
        }
        default: {
            return <span className="SortButton" onClick={() => onSort("ASC")}>&#8645;</span>
        }
    }
}

export default SortButton;