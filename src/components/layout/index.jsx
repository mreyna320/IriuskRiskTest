import "./layout.scss";
import NavItem from "../nav-item";

const Layout = (props) => {

    return <div className="Layout">
        <div className="Nav">
            <div className="Nav__image">
                <img src="logo192.png" alt="Image of user avatar" />
            </div>

            <div className="Nav__menu" data-testid="nav-menu">
                <NavItem route="" name="Planets" />
                <NavItem route="/starships" name="Starships" />
                <NavItem route="/vehicles" name="Vehicles" />
            </div>

            <div className="user-buttons user-buttons--Nav">
                <div>&#128365;</div>
                <div>&#128100;</div>
            </div>
        </div>
        <div className="Header">
            <div className="main-title">
                <h3>Imperial destroyers center</h3>
                <div className="user-buttons user-buttons--Header">
                    <div>&#128365;</div>
                    <div>&#128100;</div>
                </div>
            </div>
        </div>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer">
            Copyright FLDMFR - Iriusk Exam - v1.00
        </div>
    </div>
}

export default Layout;