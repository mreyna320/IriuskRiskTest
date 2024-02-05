import "./loader.scss";

const Loader = (props) => {
    return (
        <>
            {
                props.show && (<div className="Loader" data-testid="loader-shadow">
                    <div className="charger" data-testid="loader-charger" ></div>
                </div>)
            }
        </>)

}

export default Loader;