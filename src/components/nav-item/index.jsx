import { NavLink } from "react-router-dom"

import "./nav-item.scss"

const NavItem = ({ name, route }) =>
    <NavLink to={route} className={({ isActive }) => isActive ? "navitem active" : "navitem"}>{name}</NavLink>


export default NavItem;