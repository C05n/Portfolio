import { NavLink } from "react-router-dom";

function HeaderLink({NavPath, NavName}) {
   return (
      <NavLink className="navbar-link" to={`${NavPath}`}>{NavName}</NavLink>
   )
}

export default HeaderLink;