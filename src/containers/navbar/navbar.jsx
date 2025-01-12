import HeaderLink from "../../components/navlink/navlink";

function Navbar() {
   return (
      <header>
         <nav>
            <HeaderLink NavPath="/" NavName="Home" />
            <HeaderLink NavPath="/Projets" NavName="Projets" />
            <HeaderLink NavPath="/Contact" NavName="Contact" />
         </nav>
      </header>
   )
}

export default Navbar;