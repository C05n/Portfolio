import { NavLink } from "react-router-dom";

function HeaderLink({NavPath, NavName}) {
   return (
      <NavLink to={`${NavPath}`}>{NavName}</NavLink>
   )
}

export default HeaderLink;